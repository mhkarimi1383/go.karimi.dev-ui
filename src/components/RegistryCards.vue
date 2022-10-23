<template>
  <div style="background-color: #ececec">
    <div style="margin-left: 7%; padding-top: 5%; padding-bottom: 5%">
      <a-row :gutter="[8, 16]">
        <a-col
          v-for="reg in registries"
          v-bind:key="reg.name"
          style="
            margin-right: 10%;
            margin-left: 0;
            display: block;
            justify-content: space-between;
            align-items: center;
          "
          :span="5"
        >
          <a-card
            :hoverable="false"
            style="
              width: 150%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: column;
              align-content: center;
              min-height: 100%;
            "
          >
            <template #cover>
              <a-image :alt="reg.name + ' Logo'" :src="reg.logo" style="margin-top: 0; min-height: 100%; min-width: 100%; object-fit: fill" />
            </template>
            <template #actions>
              <a-tooltip title="Copy Pull Command">
                <copy-outlined
                  @click="copyToClipboard(reg.pullCommand)"
                  key="copy"
                />
              </a-tooltip>
            </template>
            <a-card-meta :title="reg.name" :description="reg.description" />
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { CopyOutlined } from "@ant-design/icons-vue";
import { defineComponent } from "vue";
import { message } from "ant-design-vue";

export default defineComponent({
  components: {
    CopyOutlined,
  },
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
    const gcrLogo = require("../assets/gcr.png")
    const mobyLogo = require("../assets/Moby-logo.png")
    const kubernetesLogo = require("../assets/k8s-logo.png")
    const quayLogo = require("../assets/RH_QuayIO.png")
    const elasticLogo = require("../assets/es-logo.png")
    const kubernetesGcrLogo = require("../assets/k8s-gcr.png")
    return {
      registries: [
        {
          name: "DockerHub",
          url: "docker.karimi.dev",
          description:
            "Use docker.karimi.dev as your registry, for official images (without username), use library as username",
          logo: mobyLogo,
          pullCommand: "docker pull docker.karimi.dev/library/nginx",
        },
        {
          name: "Kubernetes Registry",
          url: "docker.karimi.dev/registry.k8s.io",
          description: "Use docker.karimi.dev/registry.k8s.io as your registry",
          logo: kubernetesLogo,
          pullCommand: "docker pull registry.k8s.io/debian-base-amd64:v1.0.1",
        },
        {
          name: "Quay",
          url: "docker.karimi.dev/quay.io",
          logo: quayLogo,
          description: "Use docker.karimi.dev/quay.io as your registry",
          pullCommand:
            "docker pull docker.karimi.dev/quay.io/prometheus/node-exporter",
        },
        {
          name: "Google Container Registry",
          url: "docker.karimi.dev/gcr.io",
          logo: gcrLogo,
          description: "Use docker.karimi.dev/gcr.io as your registry",
          pullCommand: "docker pull docker.karimi.dev/gcr.io/cadvisor/cadvisor",
        },
        {
          name: "ElasticSearch",
          url: "docker.karimi.dev/docker.elastic.co",
          logo: elasticLogo,
          pullCommand:
            "docker pull docker.karimi.dev/docker.elastic.co/elasticsearch/elasticsearch",
          description:
            "Use docker.karimi.dev/docker.elastic.co as your registry",
        },
        {
          name: "Kubernetes Google Container Registry",
          url: "docker.karimi.dev/docker.elastic.co",
          logo: kubernetesGcrLogo,
          pullCommand:
            "docker pull docker.karimi.dev/k8s.gcr.io/kube-apiserver:v1.25.1",
          description: "Use docker.karimi.dev/k8s.gcr.io as your registry",
        },
      ],
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
