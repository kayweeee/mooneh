# mooneh.tech

![moonbase](https://user-images.githubusercontent.com/72917689/230766437-43cb3f09-1dbc-469e-9d6a-db050120ac60.png)

Introducing Mooneh, the out-of-this-world personal expenditure tracker that makes expense tracking fun. Earn MoonDust, buy unique Domes, and build your MoonBase while tracking your expenses!

## Inspiration
The inspiration for Mooneh comes from the pains of having to track personal expenses. Expense trackers such as SplitWise do a great job in helping you to track your expenses, with an intuitive interface and neat features that do the job. But why not do things better? Why not have fun and get rewarded for your efforts? Taking inspiration from forestapp.cc, we built Mooneh to make the mundane task of expenditure tracking something fun that you'd look forward to!

## What it does
Mooneh rewards you for keying in your expenses in the form of MoonDust. Everytime you key in your expenses, you get a certain amount of MoonDust, which you can use to purchase Domes from the store to place in your MoonBase! Mooneh also comes with a dashboard that allows you to see all your expenses from the specified month so that you can keep track of your spending. 

## How we built it
Using the React framework, our front-end was built using Tailwind CSS and Javascript. The 3D models you see on our app are made using Three.js and React Three Fiber. Our back-end was built with Ruby on Rails, making use of its MVC patterns and tools such as ActiveRecord and ActiveStorage to handle database entries and file storage. The frontend and backend have been deployed on Google Cloud platform infrastructure, utilizing Cloud Run for serverless computing and incredible scalability, Cloud SQL and Cloud Storage as backing services, and Cloud DNS and load balancers to show off our shiny new domain name!

## Challenges we ran into
We encountered some issues with moving files around in Git which resulted in not ideal integration between the front-end and back-end. As a result, we decided to restart the repository and imported our work over to the new repository in a structured manner. It worked!

## Accomplishments that we're proud of
This idea itself is something we are very proud of! This is our first hackathon, so we came into it blind, with no ideas and no idea what to expect. But within the first 2 hours of the BitCamp, we were able to identify a mundane task (i.e. tracking expenses, which we personally encounter in our daily lives and find it a complete pain) and came up with a way to make it more fun and rewarding! 

## What we learned
We learned quite a few things, and one of them was to work systematically, take note of things and naming things properly which may seem slower, but actually helps tremendously when the project got more complex.

## What's next for Mooneh
Our end goal is for Mooneh to be an application on the App Store and the Google Play Store so that it is easily accessible. You can key in your expenses and grow your MoonBase on the go! With this in mind, a few of our next steps would be:
   - Designing and coding the mobile view for Mooneh
   - Adding user login and authentication
   - "Add friends" utility and allow splitting of bills with friends
   - Filtering for the dashboard (allow to filter by category, different time periods, etc.)
   - Designing a larger variety of Domes to purchase with MoonDust!


### react to cloud build
```
gcloud builds submit --tag gcr.io/mooneh/mooneh-react
```