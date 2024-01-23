<p align="center">
  <img align="center" src="./README-GIFS/farmers market gif.gif">
</p>

<h1 align="center"> Market Maven </h1>

<p align="center"> Have too many plants and a busy schedule, or is that just me? Plant owners know the struggle of balancing a buzzing lifestyle and still taking care of the plants they love, especially when they all have such different needs! Plant Planner takes away the stress by automatically creating watering and fertilizing schedules based off of a plant’s need. Simply type in the name of your plant and Plant Planner will automatically add its watering schedule to your Google Calendar. </p>

<h2>MVP 🌿</h2>
<ul>
  <li>User Account with Google Login Authentication</li>
  <li>Page which displays all your plants and their general information</li>
 <ul>
  <li>such as image, plant, nickname, water preferences, light preferences, etc (Discuss what should be here)</li>
 </ul>
  <li>Ability to add and delete plants from your page</li>
  <li>Connects with Perenual or other API to pull information about the plants</li>
  <li>Creates a watering schedule based on information pulled from the API and implements with Google Calendar</li>
</ul>
<p>Backend will be using the Perenual API to gather information about an uploaded plant. Backend will also be maintaining a mySQL database and create an API to query information from it.</p>
<p>Frontend be using Figma to prototype the application. Frontend will be using Android Studio to create the application pages and display information to the user.</p>



<h2>Stretch Goals 🌿</h2>
<ul>
  <li>Add fertilization Schedule</li>
  <li>In case the user doesn't know the plant name, have a quiz that will allow the app to guess its watering preferences</li>
 <ul>
  <li> example: hard, stiff, and bulbous leaves -> is a succulent -> requires water once every two weeks and direct sunlight</li>
 </ul>
  <li>Add 'growth tracker' which would notify the user to take a picture every month in order to track the plants growth</li>
  <li>Sunlight sensor which would sense how bright an area is (bright direct/bright indirect/medium/dark)</li>
  <li>Add social aspect</li>
  <li>Adjust based on local weather conditions</li>
</ul>

<h2>Tech Stack 🌿</h2>
<ul>
  <li>Frontend: Android Studio</li>
  <li>Backend: Java</li>
  <li>Database: SQL</li>
</ul>

<h2>Milestones 🌿</h2>

<table>
  <tr>
    <th>Week</th>
    <th>Topic</th>
    <th>
      Tasks
    </th>
  </tr>
  <tr>
    <td>Week 1</td>
    <td>Meeting the team!! <br/> Setting up Git and develop environment</td>
    <td>
       <ul>
        <li>Git and IDEs should be set up, teach basic git commands</li>
        <li>Split team into Frontend/Backend</li>
        <li>Get a Figma set up</li>
        <li>Frontend: Start working on Figma and have draft done by next meeting</li>
        <li>Backend: Start setting up the database and connecting with API by next meeting</li>
        <li>Homework: Tech Stack tutorials</li>
        <li><b>Linh: Be nice to my participants  </b></li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>Week 2/3</td>
    <td>Prototyping/Early Development</td>
    <td>
      <ul>
        <li><i>Deliverable: Figma draft should be completed</i></li>
        <li>Frontend: Begin coding pages, starting with login/registration with a Google account</li>
        <li>Backend: Begin learning how to store login information and authentication (with google auth)</li>
        <li>Backend: Start setting up the database and connecting with API</li>
        <li>Backend: Start saving information from the API into the database</li>
        <li>Homework: Tech Stack tutorials</li>
        <li><b>Linh: Give feedback on Figma wireframe</b></li>
        <li><b>Linh: Be nice to my participants</b></li>
      </ul>  
    </td>
  </tr>
  <tr>
    <td>Week 4/5</td>
    <td>Getting Work Done!!<br/>Do as much as you can! You got this!</td>
    <td>
      <ul>
        <li>Frontend: 75% of pages should be done</li>
        <li>Frontend: Make sure to finish User and Plant Upload pages and Calendar</li>
        <li>Backend: Login authentication should be finished</li>
        <li>Backend: Finish plant search function and storing information into the database</li>
        <li>Backend: Start figuring out how to create a watering schedule based on API information</li>
        <li><i>Backend/Frontend: Integrate login/registration with each other! Logging in should be all finished!</i></li>
        <li><b>Linh: Be nice to my participants  </b></li>
      </ul>   
    </td>
  </tr>
   <tr>
    <td>Week 6/7</td>
    <td>Finish the MVP!!<br/>Fun Stretch Goals come next!</td>
    <td>
      <ul>
        <li>Frontend: 100% of MVP pages should be done!!!</li>
        <li>Backend: Watering Upload should be complete and should upload to Google Calendar</li>
        <li>Backend: Set Reminders for watering</li>
        <li>Backend: Integration of MVP should be completed</li>
        <li>Everyone: Start thinking about stretch goals!</li>
        <li><b>Linh: Be nice to my participants  </b></li>
      </ul> 
    </td>
  </tr>
  <tr>
    <td>Week 8/9</td>
    <td>MVP Done, fun Stretch Goals!<br/>Start thinking about presentations</td>
    <td>
      <ul>
        <li>Frontend: Create design for presentation slides</li>
        <li>Backend: Think about content for presentation</li>
        <li>Everyone: Start working on presentation script</li>
        <li>Everyone: Decide on which stretch goals to implement, and start!</li>
        <li>Everyone: Set presentation practice dates and times</li>
        <li><i>Demo should be decided on by the end of this sprint</i></li>
        <li><b>Linh: Be nice to my participants  </b></li>
      </ul> 
    </td>
  </tr>
  <tr>
    <td>Week 10</td>
    <td>Presentation Practice!</td>
    <td>Everyone better have their lines memorized (or else)<br/>THERE SHOULD BE NO MORE CODING</td>
  </tr>
   <tr>
    <td>Week 11</td>
    <td>Presentation Night!!</td>
    <td>Y'all got this!!</td>
  </tr>
</table>

<h1>Resources🌿</h1>
<ul>
  <li><a href="https://www.figma.com/files/team/1286199881861285197">Figma Page</a></li>
  <li><a href="https://developer.android.com/studio">Download Android Studio</a></li>
  <li><a href="https://git-scm.com/downloads">Download Git</a></li>
  <li><a href="https://www.youtube.com/watch?v=GiqqopBSoHw">Tutorial: Setting up SQL locally</li>
  <li><a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads">Download SQL</a></li>
  <li><a href="https://learn.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver16">SQL Manager</a></li>
  <li><a href="https://www.youtube.com/watch?v=dYt763QgaTg">Setting up SQL with Android Studio</a></li>
  <li><a href="https://www.youtube.com/watch?v=fis26HvvDII">Android Studio Tutorial</a> - Listen I know its long just view the sections you feel like you need</li>
  <li><a href="https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16">SQL Documentation</li>
  <li><a href="https://perenual.com/docs/api">Perenual API Documentation</a></li>
  <li><a href="https://www.youtube.com/watch?v=fis26HvvDII">API Tutorial:</li>
  <li>Git Tutorial:</li>
  <li>Google Calendar Integration Tutorial:</li>
  <li>Android Studio Image Upload Tutorial:</li>
  <li>Google Calendar Integration Tutorial:</li>
</ul> 

<h1>Git Cheat Sheet🌿</h1>


<table>
  <tr>
    <th></th>
    <th>Pulling from repo</th>
  </tr>
  <tr>
    <td>Step 1</td>
    <td>I usually will do 'git status' just to make sure I am on the right branch and everything is okay</td>
  </tr>
  <tr>
    <td>Step 2</td>
    <td>'git add .'</td>
  </tr>
  <tr>
    <td>Step 3</td>
    <td>'git commit -m "pulling"'</td>
  </tr>
  <tr>
    <td>Step 4</td>
    <td>"git pull origin main" -> or replace main with another branch if needed</td>
  </tr>
</table>

<table>
  <tr>
    <th></th>
    <th>Pushing to repo</th>
  </tr>
  <tr>
    <td>Step 1</td>
    <td>I usually will do 'git status' just to make sure I am on the right branch and everything is okay</td>
  </tr>
  <tr>
    <td>Step 2</td>
    <td>'git add .'</td>
  </tr>
  <tr>
    <td>Step 3</td>
    <td>'git commit -m "-insert features you have added-"'</td>
  </tr>
  <tr>
    <td>Step 4</td>
    <td>"git push origin -your-branch-" -> or replace main with another branch if needed</td>
  </tr>
  <tr>
    <td>Step 5</td>
    <td>Navigate to Github and create a pull request</td>
  </tr>
</table>

<table>
  <tr>
    <th></th>
    <th>Creating a Branch</th>
  </tr>
  <tr>
    <td>Step 1</td>
    <td>I usually will do 'git status' just to make sure I am on the right repo and everything is okay</td>
  </tr>
  <tr>
    <td>Step 2</td>
    <td>'git branch -b -insert your name here-'</td>
  </tr>
  <tr>
    <td>Step 3</td>
    <td>'git checkout -your branch name-'</td>
  </tr>
  <tr>
    <td>Step 4</td>
    <td>commit and push to see your branch appear on Github</td>
  </tr>
</table>

<div align="center">
<h1>Team Plant Planner 🪴</h1>

<h2>🌿Developers🌿</h2>
<h3>Aidan Loran</h3><br/>
<h3>Micah Warner</h3><br/>
<h3>Sarah Jacob</h3><br/>
<h3>Uma Uppuloori</h3><br/>

<h2>🌿Project Manager🌿</h2>
<h3>Clara Conner</h3><br/>

<h2>🌿Industry Mentor🌿</h2>
<h3>Linh Ly</h3><br/><br/>

<p align="center">
  <img align="center" src="./README-GIFS/plantspoppinggif.gif">
</p>

<h1>💚🌿🪴Thanks for checking out Plant Planner! 🪴🌿💚</h1>
</div>
