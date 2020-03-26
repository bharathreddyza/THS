//variables 
const tweetList = document.getElementById('tweet-list')
const singletweet = document.getElementById('')
//EVENT LISTENERS - methods 
// CODE READABLE- composing smaller functions 
//FUNCTIONAL PARAdigm 
eventListeners()
function eventListeners(){
    //FORM SUBMISSION 
    //SELECT THE FORM and addeventlistener
    document.querySelector('#form').addEventListener('submit', newTweet)
    tweetList.addEventListener('click',removetweet)
    document.addEventListener('DOMContentLoaded', localStorageOnLoaded)

}
function newTweet(event){
    event.preventDefault()
    //Read the value of text Area 
    const tweet = document.getElementById('tweet').value 
    // create an li element 
    const li = document.createElement('li')
    const remove  = document.createElement('a')
     remove.textContent = "X"
     remove.classList = "x"
    li.textContent = tweet
    getTweetsToLocalStorage(tweet)
    // tweetList.append(tweet)
    tweetList.appendChild(li)
    li.appendChild(remove)
}

// to remove the tweet 
function removetweet(e){   
       if(e.target.classList.contains('x')){
           e.target.parentElement.remove();
        //    localStorage.removeItem(e.target.parentElement)


       }        removeTweetFromLocal(e.target.parentElement.textContent)

}

//to remove tweet from local storage 
function removeTweetFromLocal(){
  // get the existing tweets from storage
  const tweet = getTweetsFromStorage();
  console.log(tweet.substring(0, tweet.length -1)   )  
//   )
// console.log(tweet)
  const removetweet = tweet.substring(0, tweet.length-1)
  
  //loop through the tweets and remove the tweet that is equqal
tweet.forEach(function(tweet, index){
     if(removetweet === tweet){
         tweet.splice(index,1)
     }
})
//set the tweets after deleting 
localStorage.setItem('tweet', JSON.stringify(tweet))
}       


function getTweetsToLocalStorage(tweet){
    let tweets = getTweetsFromStorage()
     tweets.push(tweet)
localStorage.setItem("tweets", JSON.stringify(tweets));

}

function getTweetsFromStorage(){
    let tweets;
    let tweetsLS = localStorage.getItem('tweets')
    if(tweetsLS == null){
        tweets =[]
    }else{
        tweets = JSON.parse(tweetsLS)
    }
    return tweets
}

//retreive the data from the local storage and generate the list 

function localStorageOnLoaded(){
    let tweets = getTweetsFromStorage()
    console.log(tweets)
    for(var i =0;i <tweets.length;i++){
        //same steps again to add the tweets to the div
    
        const tweet = tweets[i];

        const li = document.createElement('li')
        const remove  = document.createElement('a')
         remove.textContent = "X"
         remove.classList = "x"
        li.textContent = tweet
        // tweetList.append(tweet)
        tweetList.appendChild(li)
        li.appendChild(remove)

    }

}