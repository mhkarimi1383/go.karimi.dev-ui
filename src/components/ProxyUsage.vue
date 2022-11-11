<template>
  <a-space direction="vertical"  :style="{
    marginBottom: '2%'
  }" align="start">
    <a-typography-title>Usage</a-typography-title>
    <a-typography-text strong>Go 1.13 and above (RECOMMENDED)</a-typography-text>
    <a-typography-text>Open your terminal and execute</a-typography-text>
    <a-typography-text code copyable>
      $ go env -w GO111MODULE=on
    </a-typography-text>
    <a-typography-text code copyable>
      $ go env -w GOPROXY=https://go.karimi.dev,direct
    </a-typography-text>
    <a-typography-text strong>macOS or Linux</a-typography-text>
    <a-typography-text>Open your terminal and execute</a-typography-text>
    <a-typography-text code copyable>
      $ export GO111MODULE=on
    </a-typography-text>
    <a-typography-text code copyable>
      $ export GOPROXY=https://go.karimi.dev
    </a-typography-text>
    <a-typography-text>or</a-typography-text>
    <a-typography-text code copyable>
      $ echo "export GO111MODULE=on" >> ~/.profile
    </a-typography-text>
    <a-typography-text code copyable>
      $ echo "export GOPROXY=https://go.karimi.dev" >> ~/.profile
    </a-typography-text>
    <a-typography-text code copyable>
      $ source ~/.profile
  </a-typography-text>
    <a-typography-text strong>Windows</a-typography-text>
    <a-typography-text>Open your terminal and execute</a-typography-text>
    <a-typography-text code copyable>
      C:\> $env:GO111MODULE = "on"
    </a-typography-text>
    <a-typography-text code copyable>
      C:\> $env:GOPROXY = "https://go.karimi.dev"
    </a-typography-text>
    <a-typography-text>or</a-typography-text>
    <a-list bordered>
      <template v-for="item in windowsSteps" v-bind:key="item">
        <a-list-item>{{ item }}</a-list-item>
      </template>
    </a-list>
  </a-space>
</template>

<script>
import { defineComponent } from "vue";
import { message } from "ant-design-vue";

export default defineComponent({
  components: {},
  methods: {
    copyToClipboard(text) {
      navigator.clipboard
        .writeText(text)
        .then(function () {
          message.success("Pull command copied to clipboard");
        })
        .catch(function (exp) {
          message.error("Failed to copy pull command to clipboard");
          console.error(exp);
        });
    },
  },
  data: function () {
    return {
      windowsSteps: [
        '1. Open the Start Search, type in "env"',
        '2. Choose the "Edit the system environment variables"',
        '3. Click the "Environment Variables…" button',
        '4. Under the "User variables for <YOUR_USERNAME>" section (the upper half)',
        '5. Click the "New..." button',
        '6. Choose the "Variable name" input bar, type in "GO111MODULE"',
        '7. Choose the "Variable value" input bar, type in "on"',
        '8. Click the "OK" button',
        '9. Click the "New..." button',
        '10. Choose the "Variable name" input bar, type in "GOPROXY"',
        '11. Choose the "Variable value" input bar, type in "https://go.karimi.dev"',
        '12. Click the "OK" button',
      ]
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
