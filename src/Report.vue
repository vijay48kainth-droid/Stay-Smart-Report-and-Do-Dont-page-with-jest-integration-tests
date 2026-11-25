

<template>

<div v-show="isReportVue" >   

    <Header
    bgColor="salmon" 
      title=" when your attacked." 
      :image="top" 
      imageWidth="9.4%"  
      topBorderRadius="29%"
      bottomBorderRadius="19.5%"
    /> <!--This image is from this file, but is for the header component-->

<div>
    <Navigation
    :emailImage="sub"
    emailTextColour="pink" 
    emailImageWidth="5%"
    saveLocation="/save-report-email"

    /> <!--The image is from this file, but is for the navigation component-->

</div>

   <div class="main-content">
        <MainHeader/>
        <h3>Tell us what happened.</h3>
        <p class="shared-font-style">If you have been a victim of a cyber-crime or are affected by cyber-criminals please report it to us and we will help you.</p>

        <p class="shared-font-style">Please make a report if you need help.</p>
        <h2>Report process</h2>
        <p class="shared-font-style">To make a report you must follow 3 steps:</p>
    </div class="main-content">

    <Report-steps />
 
    <div class="main-content-2">
        <h3>Required information</h3>
        <p class="shared-font-style">You must give a name and an email address to make a report.</p>
        <p class="shared-font-style">Click on the form to begin your report.</p>
        <div>
            <a class="start-report-form" @click="handleStartReportFunction()">
                <img style="width:12%;" :src="begin"> <!--This image is from this file-->
            </a>
        </div>
    </div class="main-content-2">

</div class="report-view">
    

            <div v-show="isFirstVue" id="Edit-view" @submit="handleEditView()">

                <Report-steps step2High="blank" step3High="blank" id="space-under-report-process" />
                 <ProgressBar
                 :width="(threats.length > 0 ? 14 : 0) + (name.length > 0 ? 14 : 0) 
                 + (othername.length > 0 ? 0 : 0) + (date.length > 0 ? 10 : 0)
                 + (incident.length > 0 ? 14 : 0) + (email.length > 0 ? 14 : 0)
                 + (phone.length > 0 ? 0 : 0) + (adviceOrAssistance.length > 0 ? 14 : 0)"
                 :bgcolor="(activeField === 'threats'
                  ? 'red' 
                  :activeField === 'name' 
                  ? 'orange'
                  :activeField === 'othername'
                  ? 'yellow'
                  :activeField === 'date'
                  ? 'green'
                  :activeField === 'incident'
                  ? 'blue'
                  :activeField === 'email'
                  ? 'indigo'
                  :activeField === 'phone'
                  ? 'violet'
                  :activeField === 'adviceOrAssistance'
                  ? 'brown'
                  :'grey')"

        
                 
                 />
                <u><h1 class="report-header">Report-form</h1></u>
                <div class="report-form-margin">
                    <div class="report-contents">

                    <p class="shared-font-style">Please select what threat you are dealing with (Required):<br>
                    If you are not sure what each threat is visit the Do's or Don'ts page by clicking on each link below and come back: </p>
                    <div class="link-verticle">
                        <ul ><a href="Stay SMART Do's .html">Do's page</a></ul>
                        <ul ><a href="Stay SMART Don'ts.html">Don'ts page</a></ul>
                    </div>
                    
                        <div class="button-container">
                            <div id="buttons-rows">
                                <button id="r" class="button" @click="addThreat($event.target.textContent)"><b>Adware</b></button>
                                <button id="i" class="button" @click="addThreat($event.target.textContent)"><b>Spyware</b></button>
                                <button id="b" class="button" @click="addThreat($event.target.textContent)"><b>Phishing</b></button>
                            </div>
                            <div id="buttons-rows">
                                <button id="a" class="button" @click="addThreat($event.target.textContent)"><b>Ransomware</b></button>
                                <button id="n" class="button" @click="addThreat($event.target.textContent)"><b>Trojan</b></button>
                                <button id="o" class="button" @click="addThreat($event.target.textContent)"><b><span>R.A.T <span style="font-size: 22px;">
                                    (Remote access trojan)</span></span></b></button>
                            </div>
                            <div id="buttons-rows">
                                <button id="w" class="button" @click="addThreat($event.target.textContent)"><b>Key-logger</b></button>
                            </div>


                    <p class="shared-font-style">If your affected by a threat not listed please tell us what it is below:</p>
                        <label>Other threat:</label>
                        <input @focus="activeField = 'threats'"class="edit-info"  v-model="threatInput" type="text"
                        placeholder="tell us what type of problem you have here"/>
                        <button class="add-threat-button" @click="handleListFunction()">
                            Add threat
                        </button>
                            <ul>
                                <li class="threat-list" id="threat-edit" style="box-shadow:0 8px 16px 0 rgba(0,0,0,0.6);" v-for="threat in threats" :key="threat">
                                    {{ threat }}
                                    <span class="close-btn" @click="removeThreat(threat)">
                                        &times;
                                    </span>
                                </li>
                            </ul>
                        </div>
                    <form>
                       <hr style="border:solid red; border-radius:12px;">
                        <span>Name:</span>
                        <input type="text" @focus="activeField = 'name'" v-model="name" id="name" placeholder="Required" class="edit-info" required>
                        <hr style="border:solid orange; border-radius:12px;">
                        <span>Other names:</span>
                        <input type="text" @focus="activeField = 'othername'"v-model="othername" placeholder="Optional" class="edit-info" >
                        <hr style="border:solid yellow; border-radius:12px;">
                        <span>Date of incident:</span>
                        <input dir="ltr"; @focus="activeField = 'date'"v-model="date"  type="date" class="edit-info" id="date" required>
                        <hr style="border: solid green; border-radius:12px;">
                        <span>Incident description:(extend text box as necessary)</span>
                        <textarea @focus="activeField = 'incident'"v-model="incident" maxlength="1000" placeholder="Required" required></textarea>
                        <p id="incident-counter">{{incident.length}} / 1000 characters</p>
                        <hr style="border: solid blue; border-radius:12px;">
                        <span>Email address:</span>
                        <input type="email" @focus="activeField = 'email'"v-model="email" placeholder="Required" class="edit-info" required>
                        <hr style="border: solid indigo; border-radius:12px;">
                        <span>Phone number:</span>
                        <input @focus="activeField = 'phone'" placeholder="Optional" class="edit-info" v-model="phone"/>

                        <hr style="border: solid violet; border-radius:12px;">

                        <p>Are you contancting us for advice or assistance:</p>
                        <label>
                            <input @focus="activeField = 'adviceOrAssistance'" value="Advice" type="radio"
                        name="advice or assistance" v-model="adviceOrAssistance" >Advice
                        </label>
                        <label>
                            <input @focus="activeField = 'adviceOrAssistance'" value="Assistance" type="radio"
                        name="advice or assistance" v-model="adviceOrAssistance" >Assistance
                        </label>
                        <hr style="border:solid brown; border-radius:12px;">

                        <h1 v-show="showThreatInvalid" id="enter-threats">Please tell us the threat(s) you are dealing with.</h1>
                        <h1 v-show="showNameInvalid" id="enter-capital">Please enter your name beginning with a capital letter.</h1>
                        <h1 v-show="showDateInvalid" id="enter-date">Please enter a valid date, not one in the future.</h1>
                        <h1 v-show="showEmailInvalid" id="enter-email">Please enter a valid email.</h1>
                        <h1 v-show="showPhoneInvalid" id="enter-phone">Please enter a valid phone number that begins with 44, 01, 02.</h1>
                        <h1 v-show="showAdviceOrAssistanceInvalid" id="enter-advice-assistance">Please select what you are contacting us for.</h1>
                        <span><h4>Continue report</h4></span>
                        <button class="next-button" type="submit" @click="showThreatError(), showFirstnameError(), showDateError(), showEmailError(), showPhoneError(), showAdviceOrAssistanceError()" >Next</button>
                    </form>   
                    </div>
                    
                </div>
            </div>
        
    

        <div v-show="isSecondVue">

            <Report-steps step1High="blank" step3High="blank" id="space-under-report-process" />
             <ProgressBar
                :width="90"
                :bgcolor="'linear-gradient(90deg, red 0% 12.5%, orange 12.5% 25%, yellow 25% 37.5%, green 37.5% 50%, blue 50% 62.5%, indigo 62.5% 75%, violet 75% 87.5%, brown 87.5% 100%)'"
                    
                
             />

             <u><h1 class="report-header">Confirm-report</h1></u>

            <div class="report-form-margin">
              <div class="report-contents">
                <div id="confirmation-grid">
                    
                    <div class="shared-font-style" style="font-size:20px;">
                        <p>Is the information you have provided correct?</p></div>

                    <div class="confirmation-row">
                        <span id="r">Threat(s):</span>
                        <ul>
                            <li class="threat-list" style="font-size:x-large; "  v-for="(threat, index) in threats" :key="threat">
                                {{ threat }}<span style="box-shadow:none; padding:0; display: inline;" v-if="index < threats.length - 1">,</span>
                            </li>
                        </ul>
                    </div>

                        
                    <div class="confirmation-row">
                        
                        <span id="a">Name:</span><p class="confirm-text">{{ name }}</p>
                    </div>
                    <div class="confirmation-row">
                        
                        <span id="i">Other name:</span><p class="confirm-text">{{ othername }}</p>
                    </div>
                    <div class="confirmation-row">
                        
                        <span id="n">Date of incident:</span><p class="confirm-text">{{ date || "N/A" }}</p>
                    </div>
                    <div class="confirmation-row">
                        
                        <span id="b">Incident description:</span><p class="confirm-text">{{ incident }}</p>
                    </div>   
                    <div class="confirmation-row">
                        
                        <span id="o">Email validation:</span><p class="confirm-text">{{ email }}</p>
                    </div>
                    <div class="confirmation-row">
                        
                        <span id="w">Phone number:</span><p class="confirm-text">{{ phone }}</p>
                    </div>
                    <div class="confirmation-row" >
                        
                    <p style="font-style:block; font-size:x-large; color: white; background: brown; padding: 10px; border-radius:5px;">
                        Advice: <br>Assistance:</p>
                        <div style="display:flex; flex-direction: column;">
                            <label style="font-size:x-large;">
                                <input id="confirm-advice" type="radio" :checked="adviceOrAssistance === 'Advice'" disabled >Advice
                            </label>
                            <label style="font-size:x-large;">
                                <input id="confirm-assistance" type="radio" :checked="adviceOrAssistance === 'Assistance'" disabled >Assistance
                            </label>
                        </div>
                </div>
                <div style="margin-top:10px;">
                    <button style="color:white; background-color: red;" class="back-button" @click="handleConfirmView()">Back</button>
                    <button style="color:white; background-color: green;" class="submit-button"@click="handleSentView()">Submit</button>
                </div>
                </div>

            </div>
        </div>
        </div>

        
            <div v-show="isThirdVue" >

            <Report-steps step1High="blank" step2High="blank" id="space-under-report-process" />
            <ProgressBar
                :width="100" 
                :bgcolor="'linear-gradient(90deg, red 0% 11.1%, orange 11.1% 22.2%, yellow 22.2% 33.3%, green 33.3% 44.4%, blue 44.4% 55.5%, indigo 55.5% 66.6%, violet 66.6% 77.7%, brown 77.7% 88.8%, cornflowerblue 88.8% 100%)'"   
            />

                <div id="report-sent">
                    <div class="send-report-image-container">
                        <img id="space-under-report-process" class="report-image" :src="thank" >
                        <img id="space-under-report-process" class="report-image" :src="you" >  
                    </div>
                    <div class="thank-you-style">
                        <div style="display:flex; align-items:flex-end;" class="shared-font-style">
                            <h2 >Thank you&nbsp;{{ name }}</h2>
                            <div v-if="othername && othername !== 'N/A'">
                                <h2>&nbsp;{{ othername }}</h2>
                            </div>
                            <h2>&nbsp;for making this report</h2>
                        </div>
                        <div>
                            <p class="shared-font-style">You will be contacted by us and offered support with the threat you are dealing with</p>
                        </div>
                    </div>

                    <form id="thanks-email-container" @submit.prevent="handleThankEmail" >
                        <text>Please subscribe to us with your email:</text>
                            <input type="email" v-model="email" placeholder="type email here" id="thank-email" style="transform:scale(1.0); width: 40%; color:yellow;" required>
                        <button id="email-thank-submit-button" style="color:orange;" type="submit">
                            <i><b>Submit email</b></i></button>
                    </form>
                </div>
            </div>

    <Footer />

</template>


<script>

import {threatsVerification as checkThreats,
    nameVerification as checkName,
    dateVerification as checkDate,
    incidentVerification as checkIncident,
    emailVerification as checkEmail,
    phoneVerification as checkPhone,
    adviceOrAssistanceVerification as checkAdviceOrAssistance} from "./verifications.js"
import Header from './Header.vue'
import Navigation from './Navigation.vue'
import MainHeader from './MainHeader.vue'
import ReportSteps from './Report-steps.vue'
import Footer from './Footer.vue'
import ProgressBar from './ProgressBar.vue'
import { createApp } from "vue"

export default {
    name:'report',


      mounted() {
    document.title = "Stay Smart Report Vue Jest Test";
  },

     components: {
        Header,
        Navigation,
        MainHeader,
        ReportSteps,
        ProgressBar,
        Footer
    },
    data() {
        return {
            top: "/Report-images/report-page-header-image.svg",
            sub: "/Report-images/email-report-phone.svg",
            begin: "/Report-images/start-form.png",
            thank: "/Report-images/thank-image.jpg",
            you: "/Report-images/you-image.jpg",
            threats: [],
            name:"",
            othername:"",
            date:"",
            incident:"",
            email:"",
            phone:"",
            adviceOrAssistance:"",
            isReportVue: true,
            isFirstVue: false,
            isSecondVue: false,
            isThirdVue: false,
            activeField:"",
            // What the user types
            threatInput: "",

            // Controls whether the threat list is displayed
            ThreatsList: true,

            showThreatInvalid: false,
            showNameInvalid: false,
            showDateInvalid: false,
            showEmailInvalid: false,
            showPhoneInvalid: false,
            showAdviceOrAssistanceInvalid: false,


        }
    },
    methods: {

            clearForm(){
                this.threatInput = "",
                this.threats = [],
                this.name = "",
                this.othername = "",
                this.date = "",
                this.incident = "",
                this.email = "",
                this.phone = "",
                this.adviceOrAssistance = ""

            },



            threatsVerification() {
                return checkThreats(this.threats)
            },

            nameVerification() {
                return checkName(this.name)
            },

            dateVerification(){
                return checkDate(this.date)
            },

            incidentVerification(){
                return checkIncident(this.incident)
            },

            emailVerification(){
                return checkEmail(this.email)
            },

            phoneVerification(){
                return checkPhone(this.phone)
            },

            adviceOrAssistanceVerification(){
                return checkAdviceOrAssistance(this.adviceOrAssistance)
            },


// Display error messages functions:

            showThreatError(){
                if (this.threatsVerification() === false){
                    this.showThreatInvalid = true
                    event.preventDefault()
                } else {
                    this.showThreatInvalid = false
                } 
                
            },

            showFirstnameError(){
                if (this.nameVerification() === false){
                    this.showNameInvalid = true
                    event.preventDefault()
                } else {
                    this.showNameInvalid = false
                }
            },

            showDateError() {
                if (this.dateVerification() === false){
                    this.showDateInvalid = true
                    event.preventDefault()
                } else {
                    this.showDateInvalid = false
                }
            },
            
            showEmailError() {
                if (this.emailVerification() === false){
                    this.showEmailInvalid = true
                    event.preventDefault()
                } else {
                    this.showEmailInvalid = false
                }
            },

            showPhoneError(){
                if (this.phoneVerification() === false){
                    this.showPhoneInvalid = true
                    event.preventDefault()
                } else {
                    this.showPhoneInvalid = false
                }
            },

            showAdviceOrAssistanceError() {
                if (this.adviceOrAssistanceVerification() === false){
                    this.showAdviceOrAssistanceInvalid = true
                    event.preventDefault()
                } else{
                    this.showAdviceOrAssistanceInvalid = false
                }
            },

// Change pages function

            handleStartReportFunction() {
                this.isReportVue = false, this.isFirstVue = true
            },

            handleListFunction() {
                this.addThreat(this.threatInput)
                 this.threatInput = this.threatInput = ""
            },

            addThreat(threat) {
                threat = threat.trim()

                if (threat === "") {
                    return
                }

                if (this.threats.includes(threat)) {
                    return
                }

                this.activeField = "threats"

                this.threats.push(threat)
               
            },

            removeThreat(threat) {
                this.threats = this.threats.filter(item => item !== threat)
            },

            handleEditView() {

            if (this.othername === "") {
                this.othername = "N/A"

                
            } if (this.phone === "") {
                this.phone = "N/A"
            }
                

                event.preventDefault();
                
                this.isFirstVue = false, this.isSecondVue = true
            },

            handleConfirmView() {
                this.isSecondVue = false, this.isFirstVue = true

                if (this.othername === "N/A") {
                    this.othername = ""
                } if (this.phone === "N/A") {
                    this.phone = ""
                }
            },

            async handleSentView() {

                this.isSecondVue = false
                this.isThirdVue = true

                if (this.othername === "N/A") {
                    this.LastNameContainer = false
                } else {
                    this.LastNameContainer = true
                }

                const threat = this.threats
                const name = this.name
                const surname = this.othername
                const date = this.date
                const incident = this.incident
                const email = this.email
                const phone = this.phone


                const confirmAdvice = this.adviceOrAssistance === 'Advice'
                const confirmAssistance = this.adviceOrAssistance === 'Assistance'

        

                const payload = {
                    threats: threat,
                    name: name,
                    othername: surname,
                    date: date,
                    incident: incident,
                    email: email,
                    phone: phone,
                    advice: confirmAdvice,
                    assistance: confirmAssistance
                }

                const response = await fetch('save-report', {
                    method: "POST",

                    body: JSON.stringify(payload),

                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })

                const jsonRes = await response.json()
                console.log(jsonRes)
            },

            async handleThankEmail() {
                 this.isThirdVue = false
                 this.isReportVue = true

                const emailThanks = this.email
            
                

                const payload = {
                    emailThanks: emailThanks
                }

                const response = await fetch('save-thanks-email',{
                    method:"POST",

                    body: JSON.stringify(payload),

                    headers: {
                        'Accept':'Application/json',
                        'Content-type': 'Application/json'
                    }


                })

                const jsonRes = await response.json()
                console.log(jsonRes)

                this.clearForm();
                

            }

            }
   

}



</script>

<style>

button{
    cursor:pointer;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
    border:transparent;
}

.email-container{
    background-color: darkslateblue;
}

.report-email-image{
    width:6%;
}

.main-content,.main-content-2{
    margin: 0 8% auto;
    padding:2%;
    background-color: blanchedalmond;
}

.main-content {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 30%;
}

.main-content-2{
    border-top-left-radius: 12px;
    border-top-right-radius: 30%;
}

.report-font{
    font-family:monospace ;
}


.report-process{
    display:flex;
    flex-direction:row;
    justify-content: center;
    div{
        display:flex;
        flex-direction:column;
        align-items: center;
        width:33%;
        h3{
            padding: 0;
            margin:0;
        }

    }
}
#space-under-report-process{
    margin-bottom: 4%;
}

.start-report-form img{
    background-color: transparent;
    width:90%;
    cursor:pointer;
}

.start-report-form img:hover{
  transform: translateY(-10px);
  transition: transform 0.3s ease;
}

.start-report-form img:active {
    transform: scale(0.97);
    transition: transform 0.2s ease;
}

.link-verticle{
    display:flex;
    justify-content: center;
    gap:6%;
    ul{
        padding:2px;
        font-size: xx-large;
    }
}

.highlight-section{
    position:relative;
}
.highlight-section::after{
    content:' ';
    position:absolute;
    top:0; left:0; width:100%; height:100%;
    background-color: rgba(30, 30, 30, 0.4);
}
.report-image{
    width:40%;
}


.report-header {
    max-width: fit-content;
    background-color: grey;
    display: flex;
    justify-content: center;
    font-family: monospace;
    font-size: 62px;
    margin: 0 auto;
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    padding: 10px;
    margin-top: 10px;
    position: relative;
    z-index: 2;
    margin-bottom: -33px;
}
.report-contents{
    background-color: #E8E8EA;
    border-radius: 3%;
    max-width: 100%;
    padding:10px 20px;
    box-sizing: border-box;
}
.report-form-margin {
    margin: 0 20% auto;
    background: #C7BA9C;
    border: solid 10px #C7BA9C;
    border-radius:16px;
    border-width: 18px 40px;
    position: relative;
    z-index: 1;
}
input, textarea{
    border:solid black;
    background:transparent;
    border-radius:6px;
}

.edit-info:hover, textarea:hover, .confirmation-row:hover{
    transform: scale(1.035);
    font-size: larger;
    margin-left:1%;
}
input[type="radio"]{
    appearance:none;
    width: 14px;
    height: 14px;
    border: 2px solid black;
    border-radius: 50%;  
}
input[type="radio"]:checked {
    border-color: lightgreen;
    background-color: lightgreen;
    border: 2px solid black;
}
input[type="radio"]:hover{
  transform: scale(1.1);
  cursor:pointer;
}
input[type="radio"]:disabled{
    transform:scale(1);
}
#enter-threats,#enter-capital,#enter-date,#enter-email,#enter-phone,#enter-advice-assistance{
    color:red;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-weight: 300 ;
    font-size: large;
    background: none;
    align-self:auto;

}

#buttons-rows{
    display:flex;
    justify-content:center
}

.button-container{

    padding:0;
    margin:0;
}

.button{

    text-align: center;
    font-size:xx-large;
    cursor:pointer;
    
    border-radius: 12px;
    min-width:31%;
    height:70px;
    margin:10px;
    padding:0;
    
    .onclick{
        color:white;
    }
}

.add-threat-button{
    padding:8px;
    margin-top:12px;
    border-radius: 16px;
    background-color: navy;
    cursor:pointer;
    font-size: large;
    color:azure;
}

/* button threat */



/* close list style */

.threat-list {
    list-style: none;
    padding: 0;
}

#threat-edit {
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 4px;
    width:fit-content;
    font-family:'Times New Roman', Times, serif;
}

ul {
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    align-items:center;
}


.close-btn {
    color: #ff0000;
    font-weight: bold;
    cursor: pointer;
    font-size: 20px;
    padding-left: 10px;
}

.close-btn:hover {
    color: #b30000; /* Darkens the red button slightly when hovered */
}


.space{
    padding:50px;
}


#report-sent{
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin:2% 12% auto;
    background-color: cornflowerblue;
    color:white;
    padding-bottom:2%;
    border-radius: 16px;
}


hr{  
    margin:10px;
}


.report-form-container{
    max-width:400px;
    padding:10px;
    margin:auto;

}


.edit-info{
    min-height: 30px;
}

textarea{
    resize:vertical;
    min-height: 80px;
}
.edit-info,textarea{
    width:98%;
    
    font-size: medium;
    font-family: Georgia, 'Times New Roman', Times, serif;

}
#date {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: larger;
    direction: ltr;
}

#incident-counter{
    font-family:monospace;
    font-size: x-large;
}
.next-button{
    border-radius: 30px;
    background-color:green;
    height:50px;
    min-width: 10%;
    min-height: 30px;
    cursor:pointer;
    font-size: large;
    color:white;
}

.confirm-text{
    font-size: x-large;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

/* confirmation gride code */


/* Confirmation grid */

#confirmation-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;

    width: 100%;
    box-sizing: border-box;
}

/* Heading */

#confirmation-grid h4 {
    margin-bottom: 15px;
}

/* Individual confirmation rows */

.confirmation-row {
    display: grid;
    grid-template-columns: 280px minmax(0, 1fr);
    gap: 10px;
    align-items: stretch;

    width: 100%;
    box-sizing: border-box;
}

/* Label styling */

.confirmation-row span {
    padding: 12px;
    font-size: 26px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
    display: flex;
    align-items: center;

    box-sizing: border-box;
    min-width: 0;
}

/* Information styling */   
.confirmation-row div,
.confirmation-row ul,
.confirmation-row p,
.confirmation-value {
    background-color: #f2f2f2;
    padding: 12px;
    margin: 0;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.6);
    overflow-wrap: anywhere;
    min-width: 0;
    box-sizing: border-box;
}

/* Threat list */

.confirmation-value ul {
    margin: 0;
    padding-left: 20px;
}

/* Buttons */

.confirmation-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    margin-top: 15px;
}

/* Mobile responsiveness */

@media (max-width: 600px) {

    .report-form-margin {
        margin: 0 5%;
    }

    #confirmation-grid {
        width: 100%;
    }

    .confirmation-row {
        grid-template-columns: 1fr;
        gap: 5px;
    }

    .confirmation-row span {
        font-size: 20px;
    }
}

#confirm-advice, #confirm-assistance{
    font-size: x-large;
}


.back-button{
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    height:50px;
    width:8%
}

.submit-button{
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    height:50px;
    width:8%
}


.send-report-image-container{
    background-color: white;
    display:flex;
    justify-content: center;
}

.button:active, .add-threat-button:active, .next-button:active, .back-button:active, .submit-button:active{
    box-shadow:none;
    transform: scale(0.97);
}

.button:hover,.add-threat-button:hover, .next-button:hover,.back-button:hover, .submit-button:hover{
    transform: translateY(-7px);
    transition: transform 0.3s ease;
}

.thank-you-style{
    padding:10px;
    display:flex;
    justify-content:space-between;
    width:100%;
    flex-direction: column;
    align-items: center;

}

#thanks-email-container {
    font-size: large;
    width:49%;
    display: flex;
    align-items: flex-start;
    border-radius: 16px;
    border: none;
    box-shadow: inset 0 0 0 2px white;
    margin:0;
    padding:8px;
    input,button{
        font-size: large;
        font-family:Arial, Helvetica, sans-serif;
        background-color: transparent; 
        color: white; 
        border:none !important; 
        outline:none !important; 
        background:none;
    }
}

#thanks-email-container:has(button:active){
        transform: translate(1px,1px) scale(0.96);
        box-shadow: inset 0 12px 32px darkblue;
    }

#email-thank-submit-button{
    box-shadow:none;
}
#email-thank-submit-button:hover, #back-button:hover,#submit-button:hover{
  transform: translateY(0px);
}


</style>