                                         GIT HUB USER FINDER
Project overveiw
The app has 2 pages :
     1)home page
     2)profile page

     
The home page is the first page that appears when the app is run. In the home page there is a search bar that 
is used to search git hub users and display the result of the name searched below it. When the name is 
clicked the app loads the profile page that displays the user's bio and a list of repositories

In the profile bio there is a link that a user can click to display more details about him or her  from the   

actual git hub website

The app was deployed using vercel .The live link for the website is 
               https://git-hub-user-finder-khaki.vercel.app/user/oyieroyier



concepts covered

1) useEffect -  This hook is used to fetch data from the git hub rest API in the searchbar component, profile
   display component and repos component

2)  conditional rendering - The app  only dispalys the accounts of people who are logged in git hub if not an
   error message will appear saying the account is not found.

3)  routing -When the user name is clicked in the home page the app routes to the profile page.In the profile
   page there is also a link (HOME) which when clicked  takes the user back to the home page


MVP'S

The app satisfies the mvp's conditions as it can search for a git hub account by username, show the account's profile and a list of the user repos


collaborators
The following people where collaborators in this project:
1)Arnold Maruti (group leader)
2)Lavender Morara
3)Alice Mugure
4)Peter Mutungi

