import { defineStore } from "pinia";
import { IDeveloper } from "@/interfaces/IDeveloper";

export const useDeveloperStore = defineStore("DeveloperStore", {
  state: () => {
    return {
      Developer: null as IDeveloper | null,
      Loading: false,
      ErrorMessage: null as string | null,
    };
  },
  actions: {
    async GetDeveloper() {
      this.Loading = true;
      this.ErrorMessage = null;
      try {
        const RESPONSE = await fetch(
          "http://127.0.0.1:8000/Portfolio/Developer/1/"
        );
        const DATA: IDeveloper = await RESPONSE.json();
        this.Developer = DATA;
      } catch (exeption: unknown) {
        if (exeption instanceof Error) {
          this.ErrorMessage = exeption.message;
        } else {
          this.ErrorMessage =
            "Unknown error when loading developer information";
        }
      } finally {
        this.Loading = false;
      }
    },
  },
  persist: true,
});
