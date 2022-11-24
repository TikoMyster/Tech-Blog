const { Post } = require('../models');

const postData = [
    {
        title: "Spider-man is the best",
        post_content: "Spider-Man, Spider-Man, Friendly neighborhood Spider-Man, Wealth and fame, He's ignored, Action is his reward, Look out, Here comes the Spider-Man.",
        user_id: 3
    },
    {
        title: "I love pasta!",
        post_content: "We really enjoyed this pasta",
        user_id: 1
    },
    {
        title: "Darth Vader is misunderstood!",
        post_content: "Anakin had a rough time",
        user_id: 2

    },
    {
        title: "I like turtles",
        post_content: "I like turtles",
        user_id: 5
    },
    {
        title: "Dogs are better!",
        post_content: "Dogs love and have more respect to us compared to other pets most of the time",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;