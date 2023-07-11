<template>
  <div class="container">
    <article class="blog-post" v-if="post">
      <h2 class="blog-post__title">{{ post.title }}</h2>
      <h3 class="blog-post__subtitle">{{ post.subtitle }}</h3>
      <p class="blog-post__meta">
        By <AuthorLink :author="post.author" /> | {{ displayableDate(post.publishDate) }}
      </p>
      <p class="blog-post__description">{{ post.metaDescription }}</p>
      <div class="blog-post__body">
        {{ post.body }}
      </div>
      <ul class="list-inline blog-post__tags">
        <li class="list-inline-item" v-for="tag in post.tags" :key="tag.name">
          <router-link :to="`/tag/${tag.name}`" class="text-muted">#{{ tag.name }}</router-link>
        </li>
      </ul>
    </article>
  </div>
</template>

<script>
import gql from 'graphql-tag'

import AuthorLink from '@/components/AuthorLink'

export default {
  name: 'Post',
  components: {
    AuthorLink,
  },
  data () {
    return {
      post: null,
    }
  },
  async created () {
    const post = await this.$apollo.query({
      query: gql`query ($slug: String!) {
        postBySlug(slug: $slug) {
          title
          subtitle
          publishDate
          metaDescription
          slug
          body
          author {
            user {
              username
              firstName
              lastName
            }
          }
          tags {
            name
          }
        }
      }`,
      variables: {
        slug: this.$route.params.slug,
      },
    })
    this.post = post.data.postBySlug
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
.blog-post__title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.blog-post__subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #777;
}

.blog-post__meta {
  color: #777;
  margin-bottom: 1rem;
}

.blog-post__description {
  color: #777;
  font-style: italic;
  margin-bottom: 2rem;
}

.blog-post__body {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.blog-post__tags {
  margin-top: 2rem;
  list-style: none;
  padding: 0;
}

.blog-post__tags li {
  display: inline;
  margin-right: 0.5rem;
}

.blog-post__tags li:last-child {
  margin-right: 0;
}
</style>