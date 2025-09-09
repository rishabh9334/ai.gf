document.getElementById('startButton').addEventListener('click', () => {
    document.querySelector('.landing-page').style.display = 'none';
    document.querySelector('#chatContainer').style.display = 'flex';
    initializeChatbot();
});

function initializeChatbot() {
    const avatarSelector = new AvatarSelector(document.getElementById('avatarSelector'));
    const chatbox = new Chatbox(document.getElementById('chatbox'), avatarSelector.selectedAvatar);
    chatbox.start();
}