<template>
  <div class="row">
    <div class="col-md-4 mb-3" v-for="post in publishedPosts" :key="post.title">
      <div class="post bg-light p-3">
        <span class="post__title">
          <router-link :to="`/post/${post.slug}`" class="text-primary font-weight-bold">{{ post.title }}: {{ post.subtitle }}</router-link>
        </span>
        <span v-if="showAuthor">
          by <AuthorLink :author="post.author" class="text-muted" />
        </span>
        <div class="post__date text-muted">{{ displayableDate(post.publishDate) }}</div>
        <p class="post__description">{{ post.metaDescription }}</p>
        <ul class="list-inline">
          <li class="list-inline-item post__tags" v-for="tag in post.tags" :key="tag.name">
            <router-link :to="`/tag/${tag.name}`" class="text-muted">#{{ tag.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import AuthorLink from '@/components/AuthorLink'

export default {
  name: 'PostList',
  components: {
    AuthorLink,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
    showAuthor: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  computed: {
    publishedPosts () {
      return this.posts.filter(post => post.published)
    }
  },
  methods: {
    displayableDate (date) {
      return new Intl.DateTimeFormat(
        'en-US',
        { dateStyle: 'full' },
      ).format(new Date(date))
    }
  },
}
</script>

<style>
.post-list {
  list-style: none;
}

.post {
  border-bottom: 1px solid #ccc;
  padding-bottom: 1rem;
  border-radius: 20px;
}

.post__title {
  font-size: 1.25rem;
}

.post__description {
  color: #777;
  font-style: italic;
}

.post__tags {
  list-style: none;
  font-weight: bold;
  font-size: 0.8125rem;
}
</style>