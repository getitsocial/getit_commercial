<template>
  <div class="editor">
    <client-only>
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div class="menubar-wrapper">
          <ul class="menubar">
            <li>
              <button
                :class="{ active: isActive.bold() }"
                @click="commands.bold"
              >
                <b>B</b>
              </button>
            </li>

            <li>
              <button
                :class="{ active: isActive.italic() }"
                @click="commands.italic"
              >
                <i>I</i>
              </button>
            </li>

            <li>
              <button
                :class="{ active: isActive.underline() }"
                @click="commands.underline"
              >
                <u>U</u>
              </button>
            </li>

            <li>
              <button
                :class="{ active: isActive.heading({ level: 1 }) }"
                @click="commands.heading({ level: 1 })"
              >
                H1
              </button>
            </li>

            <li>
              <button
                :class="{ active: isActive.heading({ level: 2 }) }"
                @click="commands.heading({ level: 2 })"
              >
                H2
              </button>
            </li>

            <li>
              <button
                :class="{ active: isActive.heading({ level: 3 }) }"
                @click="commands.heading({ level: 3 })"
              >
                H3
              </button>
            </li>
          </ul>
        </div>
      </editor-menu-bar>

      <editor-content class="editor-content" :editor="editor" />
    </client-only>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import { Heading, Bold, Italic, Link, Underline } from 'tiptap-extensions'
export default {
  components: {
    EditorContent,
    EditorMenuBar,
  },
  data: () => ({
    editor: null,
  }),
  mounted() {
    this.editor = new Editor({
      extensions: [
        new Heading({ levels: [1, 2, 3] }),
        new Link(),
        new Bold(),
        new Italic(),
        new Underline(),
      ],
      content: `<p></p><p></p>`,
      onUpdate: ({ getHTML }) => {
        this.$emit('content', getHTML())
      },
    })
  },
  beforeDestroy() {
    if (!this.editor) return
    this.editor.destroy()
  },
}
</script>
<style lang="scss">
.menubar {
  &-wrapper {
    @apply my-1;
  }
  @apply flex flex-wrap justify-center;
  &li {
    @apply flex-auto;
  }
}

.active {
  @apply bg-grey;
}

.editor {
  &-content {
    @apply mt-3 text-base bg-grey p-3 rounded-lg;
    &:focus {
      @apply shadow-outline;
    }
  }
}
</style>
