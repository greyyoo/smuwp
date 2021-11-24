<template>
  <div>
    <div class="editor">
      <editor-menu-bar v-slot="{ commands, isActive }" :editor="editor">
        <div class="menubar">
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <img class="icon" src="@/assets/icons/bold.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <img class="icon" src="@/assets/icons/italic.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.strike() }"
            @click="commands.strike"
          >
            <img class="icon" src="@/assets/icons/strike.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.underline() }"
            @click="commands.underline"
          >
            <img class="icon" src="@/assets/icons/underline.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code() }"
            @click="commands.code"
          >
            <img class="icon" src="@/assets/icons/code.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.paragraph() }"
            @click="commands.paragraph"
          >
            <img class="icon" src="@/assets/icons/paragraph.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 1 }) }"
            @click="commands.heading({ level: 1 })"
          >
            H1
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 2 }) }"
            @click="commands.heading({ level: 2 })"
          >
            H2
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.heading({ level: 3 }) }"
            @click="commands.heading({ level: 3 })"
          >
            H3
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <img class="icon" src="@/assets/icons/ul.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <img class="icon" src="@/assets/icons/ol.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.blockquote() }"
            @click="commands.blockquote"
          >
            <img class="icon" src="@/assets/icons/quote.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.code_block() }"
            @click="commands.code_block"
          >
            <img class="icon" src="@/assets/icons/code.svg" alt="">
          </button>
          <button
            class="menubar__button"
            @click="commands.horizontal_rule"
          >
            <img class="icon" src="@/assets/icons/hr.svg" alt="">
          </button>
          <button
            class="menubar__button"
            @click="commands.undo"
          >
            <img class="icon" src="@/assets/icons/undo.svg" alt="">
          </button>
          <button
            class="menubar__button"
            @click="commands.redo"
          >
            <img class="icon" src="@/assets/icons/redo.svg" alt="">
          </button>
          <button
            class="menubar__button"
            @click="showImagePrompt(commands.image)"
          >
            <img class="icon" src="@/assets/icons/image.svg" alt="">
          </button>
          <button
            class="menubar__button"
            :class="{ 'is-active': isActive.todo_list() }"
            @click="commands.todo_list"
          >
            <img class="icon" src="@/assets/icons/checklist.svg" alt="">
          </button>
          <button
            class="menubar__button"
            @click="commands.createTable({rowsCount: 3, colsCount: 3, withHeaderRow: false })"
          >
            <img class="icon" src="@/assets/icons/table.svg" alt="">
          </button>
          <span v-if="isActive.table()">
            <button
              class="menubar__button"
              @click="commands.deleteTable"
            >
              <img class="icon" src="@/assets/icons/delete_table.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.addColumnBefore"
            >
              <img class="icon" src="@/assets/icons/add_col_before.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.addColumnAfter"
            >
              <img class="icon" src="@/assets/icons/add_col_after.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.deleteColumn"
            >
              <img class="icon" src="@/assets/icons/delete_col.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.addRowBefore"
            >
              <img class="icon" src="@/assets/icons/add_row_before.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.addRowAfter"
            >
              <img class="icon" src="@/assets/icons/add_row_after.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.deleteRow"
            >
              <img class="icon" src="@/assets/icons/delete_row.svg" alt="">
            </button>
            <button
              class="menubar__button"
              @click="commands.toggleCellMerge"
            >
              <img class="icon" src="@/assets/icons/combine_cells.svg" alt="">
            </button>
          </span>
        </div>
      </editor-menu-bar>
      <div id="title">
        <b-input v-model="question" type="text" />
      </div>
      <div id="date">
        <label for="createddate">최초 작성</label>
        <b-form-datepicker id="createddate" v-model="create" class="mb-2" />
        <label for="lasteditddate">최종 업데이트</label>
        <b-form-datepicker id="lasteditddate" v-model="lastEdit" class="mb-2" />
      </div>
      <div id="tags">
        <label for="tags-basic">태그</label>
        <b-form-tags v-model="tags" input-id="tags-basic" />
      </div>
      <editor-content class="editor__content" :editor="editor" />
      <b-button
        :disabled="submitSuccessful"
        variant="success"
        size="lg"
        class="submit_button"
        @click="submit"
      >
        <span v-if="!submitSuccessful">등록하기</span>
        <span v-else>등록완료</span>
      </b-button>
      <label>
        ID:
      </label>
      <b-input v-model="questionId" type="number" />
    </div>
  </div>
</template>
<script>
import '@nuxtjs/axios'
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Image,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Placeholder,
  Focus
} from 'tiptap-extensions'
import { faq } from '~/plugins/firebase.js'
export default {
  components: {
    EditorContent,
    EditorMenuBar
  },
  data () {
    return {
      editor: null,
      question: '',
      answer: '',
      submitSuccessful: false,
      tags: [],
      questionId: 0,
      create: null,
      lastEdit: null
    }
  },
  mounted () {
    this.editor = new Editor({
      autoFocus: true,
      content: '',
      onUpdate: ({ getHTML }) => {
        this.answer = getHTML()
      },
      extensions: [
        // The editor will accept paragraphs and headline elements as part of its document schema.
        new Blockquote(),
        new BulletList(),
        new CodeBlock(),
        new HardBreak(),
        new Heading({ levels: [1, 2, 3] }),
        new HorizontalRule(),
        new ListItem(),
        new OrderedList(),
        new TodoItem({
          nested: true
        }),
        new TodoList(),
        new Link(),
        new Bold(),
        new Code(),
        new Italic(),
        new Strike(),
        new Underline(),
        new History(),
        new Image(),
        new Table({
          resizable: true
        }),
        new TableHeader(),
        new TableCell(),
        new TableRow(),
        new Placeholder({
          emptyEditorClass: 'is-editor-empty',
          emptyNodeClass: 'is-empty',
          showOnlyWhenEditable: true,
          showOnlyCurrent: true
        }),
        new Focus({
          className: 'has-focus',
          nested: true
        })
      ]
    })
  },
  beforeDestroy () {
    this.editor.destroy()
  },
  methods: {
    showImagePrompt (command) {
      const src = prompt('Enter the url of your image here')
      if (src !== null) {
        command({ src })
      }
    },
    async submit () {
      const data = {
        Question: this.question,
        Answer: this.answer,
        Tags: this.tags,
        Create: this.create,
        LastEdit: this.lastEdit,
        Linkto: '/faq/' + this.questionId
      }
      // eslint-disable-next-line
      const res = await faq.doc(this.questionId).set(data)
      this.submitSuccessful = true
    }
  }
}
</script>
<style lang="scss" scope>
@import "../components/sass/variables.scss";
.icon {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 0.8rem;
  height: 0.8rem;
  margin: 0 .3rem;
  top: -.05rem;
  fill: currentColor;
  // &.has-align-fix {
  // top: -.1rem;
  // }
  &__svg {
    display: inline-block;
    vertical-align: top;
    width: 100%;
    height: 100%;
  }
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
}
// svg sprite
body > svg,
.icon use > svg,
symbol {
  path,
  rect,
  circle,
  g {
    fill: currentColor;
    stroke: none;
  }
  *[d="M0 0h24v24H0z"] {
    display: none;
  }
}
//todo
ul[data-type="todo_list"] {
  padding-left: 0;
}
li[data-type="todo_item"] {
  display: flex;
  flex-direction: row;
}
.todo-checkbox {
  border: 2px solid $color-black;
  height: 0.9em;
  width: 0.9em;
  box-sizing: border-box;
  margin-right: 10px;
  margin-top: 0.3rem;
  user-select: none;
  -webkit-user-select: none;
  cursor: pointer;
  border-radius: 0.2em;
  background-color: transparent;
  transition: 0.4s background;
}
.todo-content {
  flex: 1;
  > p:last-of-type {
    margin-bottom: 0;
  }
  > ul[data-type="todo_list"] {
    margin: .5rem 0;
  }
}
li[data-done="true"] {
  > .todo-content {
    > p {
      text-decoration: line-through;
    }
  }
  > .todo-checkbox {
    background-color: $color-black;
  }
}
li[data-done="false"] {
  text-decoration: none;
}
.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
  font-style: italic;
}
.has-focus {
  border-radius: 3px;
  box-shadow: 0 0 0 3px #3ea4ffe6;
}
</style>
