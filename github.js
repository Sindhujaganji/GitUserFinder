class Github{
    constructor() {
        this.client_id = '434d48107ecbf0ecee4f';
        this.client_secret = '66358e32539daa78478e0275cf9c85c1c515a060';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/$
        {user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return{
            profile
        }
    }
}

const github = new Github;

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener('keyup', (e)=>{
    const userText = e.target.value;
    if(userText!==''){
        github.getUser(userText).then(data=>{
            console.log(data);
        })
    }

});