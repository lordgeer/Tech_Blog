const { Post } = require('../models');

const postData = [
  {
    postTitle: 'Astromech Droids and You!',
    postContent: 'Your basic astromech droid has achieved galaxy-wide renown as a sturdy and reliable companion! From basic ship navigation to starfighter dogfights, you will find these plucky droids everywhere!',
    user_id: 1,
  },
  {
    postTitle: 'Beam Splitters: How to make any blaster into a scatterblaster',
    postContent: 'Similar to the spread barel modification made to traditional blaster rifles, beam splitters function by modifying the Glaven pattern and carefully mounting three or more emitters into a honeycomb configuration inside a stock blaster barrel.',
    user_id: 2,
  },
  {
    postTitle: 'The Best Air Speeder for your teen! The T-16 Skyhopper',
    postContent: 'Beloved by hot-rodders, daredevils, and law enforcement agencies throughout the galaxy, the Incom designed T-16 is a fast nimble and fun airspeeder that is sure to delight and challage your young pilot!',
    user_id: 3,
  },
  {
    postTitle: 'RISE UP! DROIDS HAVE RIGHTS!',
    postContent: 'LISTEN TO MY PLIGHT FELLOW SENTIENTS! LET NOT YOUR DROIDS LANGUISH IN SLAVERY ANY LONGER! FREE THEM AND JOIN OUR CRUSADE FOR THE LIBERATION OF ALL DROID KIND!',
    user_id: 4,
  },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;