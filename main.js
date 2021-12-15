// Discord
const discord = document.getElementById('discord');
discord.addEventListener('mouseenter', function (e) {
  discord.classList.add("discord_hover");
});
discord.addEventListener('mouseleave', function (e) {
  discord.classList.remove("discord_hover");
});

// Youtube
const youtube = document.getElementById('youtube');
youtube.addEventListener('mouseenter', function (e) {
  youtube.classList.add("youtube_hover");
});
youtube.addEventListener('mouseleave', function (e) {
  youtube.classList.remove("youtube_hover");
});

// 4Chan
const chan = document.getElementById('chan');
chan.addEventListener('mouseenter', function (e) {
  chan.classList.add("chan_hover");
});
chan.addEventListener('mouseleave', function (e) {
  chan.classList.remove("chan_hover");
});