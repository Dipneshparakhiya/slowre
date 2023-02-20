<template>
  <div id="app">
    <div ref="bg" class="black-bg"></div>
    <div class="text-center">
      <h2 class="title">slowed + reverb</h2>
    </div>
    <div class="paper container container-sm margin-top-large">
      <div v-if="error" class="alert alert-danger dismissible">
        {{ error }}
        <label @click="error = null" class="btn-close" for="alert-5">X</label>
      </div>
      <div class="row flex-center margin-bottom-large">
        <input accept="audio/*" type="file" @change="start" />
      </div>
      <div v-if="fileloading" class="progress margin-bottom">
        <div :class="'bar striped success w-' + fileloading"></div>
      </div>
      <div class="form-group">
        <label for="percentage">Playback Rate</label>
        <input
          class="input-block"
          type="range"
          step="0.01"
          min="0.5"
          max="1"
          @mouseup="datachanged"
          v-model="playback"
          oninput="output.value = (this.value*100) + '%';"
        />
        <output id="output" for="percentage"
          >{{ Math.round(playback * 100) }}%</output
        >
      </div>
      <div class="form-group">
        <label for="percentage">Reverb</label>
        <input
          class="input-block"
          type="range"
          step="0.01"
          min="0"
          max="1"
          @mouseup="datachanged"
          v-model="wet"
          oninput="output.value = (this.value*100) + '%';"
        />
        <output id="output" for="percentage"
          >{{ Math.round(wet * 100) }}%</output
        >
      </div>
      <button class="btn-block" @click="play">
        {{ isPlaying ? "PAUSE" : "PLAY" }}
      </button>
      <button class="btn-block margin-top" @click="replay">REPLAY</button>
      <button
        class="btn-block btn-secondary-outline margin-top"
        @click="render"
      >
        DOWNLOAD
      </button>
      <a ref="rendered" style="display: none"></a>
      <div class="row flex-center margin-top">
        
      </div>
    </div>
  </div>
  <div>
  <p>A slowed reverbed generator tool is a digital audio processing tool that is used to create slowed-down and reverberated versions of sound recordings. This tool is used primarily in the creation of ambient music and soundscapes, as well as in the creation of other forms of experimental music.</p>

<p>The slowed reverbed generator tool works by taking a sound recording and slowing it down to a specific tempo, while also adding reverberation to the sound. This results in a slower and more atmospheric version of the original sound, with a sense of space and depth created by the added reverb.</p>

<p>One of the key features of the slowed reverbed generator tool is the ability to adjust the amount of reverb that is added to the sound. This can range from a subtle amount of reverb, to a more extreme and pronounced reverb effect that creates a sense of distance and depth in the sound.</p>

<p>In addition to adjusting the amount of reverb, the tool also allows the user to adjust the length of the reverb tail. This is the amount of time that the reverberation persists after the original sound has stopped. By adjusting the length of the reverb tail, the user can create a variety of different effects, from a short, sharp burst of reverb, to a long, drawn-out reverberation that creates a sense of sustained space and atmosphere.</p>

<p>The slowed reverbed generator tool can be used in a variety of different ways, depending on the desired effect. It can be used to create background atmospheres and textures, to add depth and atmosphere to existing recordings, or to create new and experimental soundscapes.</p>

<p>One of the advantages of using a slowed reverbed generator tool is the ability to create unique and interesting sounds that are difficult to achieve through traditional recording techniques. By manipulating the tempo and reverb of a sound recording, the user can create a completely different sonic environment, with a sense of depth and space that is not possible through conventional recording methods.</p>

<p>Overall, the slowed reverbed generator tool is a powerful and versatile tool that is widely used in the creation of ambient and experimental music. With its ability to manipulate the tempo and reverb of sound recordings, it offers a unique way to create atmospheric and otherworldly soundscapes, and to explore new sonic territories.</p>
  </div>
  <div>
  <h2>FAQ FOR Slow and Reverb Audio</h2>
  What is a Slowed Reverbed Generator?
A Slowed Reverbed Generator is a digital audio processing tool that allows users to slow down a sound recording while adding reverb to create a slower and more atmospheric version of the original sound.

What kind of music is Slowed Reverbed Generator used for?
Slowed Reverbed Generator is commonly used for creating ambient and experimental music.

What are the key features of a Slowed Reverbed Generator?
The key features of a Slowed Reverbed Generator include the ability to adjust the amount of reverb, the length of the reverb tail, and the tempo of the recording.

Can Slowed Reverbed Generator be used on any type of sound recording?
Slowed Reverbed Generator can be used on any type of sound recording, including vocals, instruments, and field recordings.

What are some creative ways to use Slowed Reverbed Generator?
Some creative ways to use Slowed Reverbed Generator include adding reverb to recordings of nature sounds, creating a slowed down version of a popular song, and layering multiple recordings to create an ambient soundscape.

How does Slowed Reverbed Generator differ from other audio effects?
Slowed Reverbed Generator differs from other audio effects in that it specifically slows down the tempo of a recording while adding reverb, creating a unique atmospheric effect.
  </div>
</template>

<script>
import * as Tone from "tone";
import * as toWav from "audiobuffer-to-wav";
import "../node_modules/papercss/dist/paper.css";
import "./style.css";

export default {
  name: "App",
  metaInfo: {
    title: '𝓢𝓵𝓸𝔀𝓮𝓭 + 𝓡𝓮𝓿𝓮𝓻𝓫 Generator - slow and reverb any audio online',
    base: { target: '_blank', href: '/' },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'Slowed + Reverb Generator Online. you can slow any song/audio and apply reverb effect to it, and also hear the audio in real-time and download it.' },
      { name: 'keywords', content: 'slowed + reverb, slowed + reverb generator, slowed and reverb generator, slowed reverb app, slowed and reverb songs download, slow song' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    ]

  },
  components: {},
  data() {
    return {
      buffer: null,
      fileurl: null,
      player: null,
      offset: 0,
      startedAt: 0,
      playback: 0.8,
      wet: 0.6,
      decay: 2,
      preDelay: 0.0,
      chunks: [],
      renderTime: 60,
      renderFileName: "none.wav",
      fileloading: false,
      error: null,
      isPlaying: false,
    };
  },
  mounted: function () {},
  methods: {
    datachanged() {
      this.$refs.bg.style.opacity = Math.fround(1.2 - this.playback); // change background opacity base on the playbackrate
      if (!this.fileurl) return (this.error = "upload audio first");
      this.pause();
      this.play();
    },
    replay() {
      if (!this.fileurl) return (this.error = "upload audio first");
      if (this.isPlaying) this.pause();
      this.offset = 0;
      this.startedAt = 0;
      this.play();
    },
    start(e) {
      console.log(e);
      if (e.target.files.length) {
        this.fileloading = "20";
        const file = e.target.files[0];
        this.fileurl = URL.createObjectURL(file);
        this.renderFileName = file.name.split(".")[0] + " 𝓼𝓵𝓸𝔀𝓮𝓭 + 𝓻𝓮𝓿𝓮𝓻𝓫";
      }
      if (this.player && this.player.state === "started") this.stop();
      this.offset = 0;
      this.startedAt = 0;
      const audio = new Audio();
      audio.src = this.fileurl;
      this.fileloading = "50";
      audio.onloadedmetadata = () =>
        (this.renderTime = audio.duration * (2.01 - this.playback));
      this.play();
    },
    pause() {
      if (!this.fileurl) return (this.error = "upload audio first");
      this.offset = Tone.now() - this.startedAt;
      this.player.stop();
      this.isPlaying = false;
    },
    render() {
      if (!this.fileurl) return (this.error = "upload audio first");
      this.fileloading = "10";
      var renderedElm = document.createElement("a");
      Tone.Offline(async () => {
        this.fileloading = "40";
        const reverb = new Tone.Reverb({
          decay: this.decay,
          wet: this.wet,
          preDelay: this.preDelay,
        }).toDestination();
        const song = new Tone.Player(this.fileurl).connect(reverb);
        song.playbackRate = this.playback;
        await Tone.loaded().then(() => {
          song.start(), (this.fileloading = "70");
        });
      }, this.renderTime).then((buffer) => {
        this.fileloading = "90";
        const wav = toWav(buffer);
        let blob = new Blob([wav], { type: "audio/wav" });
        let new_file = URL.createObjectURL(blob);
        renderedElm.href = new_file;
        renderedElm.download = this.renderFileName;
        renderedElm.style.display = "none";
        renderedElm.click();
        this.fileloading = false;
      });
    },
    play() {
      if (!this.fileurl) return (this.error = "upload audio first");
      if (this.isPlaying) return this.pause();
      const reverb = new Tone.Reverb({
        decay: this.decay,
        wet: this.wet,
        preDelay: this.preDelay,
      }).toDestination();
      this.player = new Tone.Player(this.fileurl).connect(reverb);
      this.player.playbackRate = this.playback;
      this.player.loop = true;
      this.fileloading = "90";
      Tone.loaded().then(() => {
        console.log(this.player.buffer.duration);
        this.fileloading = "100";
        this.startedAt = Tone.now() - this.offset;
        this.player.start(0, this.offset);
        this.isPlaying = true;
        this.fileloading = false;
      });
    },
  },
};
</script>
