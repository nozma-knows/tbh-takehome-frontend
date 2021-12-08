# tbh take-home - Frontend

Congrats on being selected for our coding exercise. We see a lot of potential and don't want to have to waste your time on pesky whiteboard interviews.

This is a representation of some of the work that'll be done during your time at tbh.

## 🎯 Aim

If you’re a good fit for this role, it should just be a bit of fun! No traps, or catches, all we want to do is check that you:
1. Can use a version control system (in this case GitHub)
2. Understand basic React + HTML, CSS & JS
3. Can read documentation and pick up a new library (in this case React Hook Form)
4. Can follow a responsive design spec
5. Can deliver data to an API according to spec

## 📝 Logistics

1. Make your own GitHub repo with this README.md file
2. Make commits as you would in your day to day work
3. Send a link to your repo to brooke@tbh.us once you’re done

## 📜 Task

A great way to get more users is current user referrals! Help build us a page where our users can do this via a small form.

Designs available in [this Figma file](https://www.figma.com/file/MQue9T1ymSUbegIS0PyAw2/Interview---Frontend?node-id=0%3A1) 

-> create an account to view the dimensions, colors, etc...

# NOTES
- The font is [Popppins](https://fonts.google.com/specimen/Poppins?query=poppins)
- Replace grey box with [this embedded GIF](https://giphy.com/stickers/BattenhallDesign-battenhall-battenhalltrends-battenhalltrends2022-SzpPBBRu) 
- Center the content (image, heading, subheading, form fields and button) on page both vertically and horizontally

# Requirements
- Mobile breakpoint: 600px i.e. if screen width less than that, display the mobile view, else show the desktop one
- Install and use the [React Hook Form Library](https://react-hook-form.com/) to implement the form above, how you achieve the design look is up to you (CSS or some package e.g. Material UI)
- All fields are required. The button should become active only when all 3 fields are complete and the email address is valid
- The email field should check to see if the email is valid (at least check that it contains an @ symbol or use a more sophisticated [regex](https://emailregex.com/)). If not valid, display the error message above below the field and should disappear when the user corrects the inputted address.
- OnSubmit displays an [alert box](https://www.w3schools.com/jsref/met_win_alert.asp) with the data you would submit to the API. Should be an object containing 3 strings as below:

{
	firstName: “Brooke”,
	lastName: “Krajancich”,
	emailAddress: “brooke@tbh.us”
}



# To start this starter project:

# `yarn`

To install all packages

# `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🤔 Questions?

Email brooke@tbh.us ✌️

