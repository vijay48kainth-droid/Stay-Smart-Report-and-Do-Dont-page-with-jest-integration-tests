
const {app, server} = require('./server')
const request = require('supertest')

// email verification tests
test("supertest valid Home page email test", async function() {

    const testPayload = {
        emailHeader: "home@gmail.com"
    }

    const response = await request(app)
        .post('/save-home-email')
        .send(testPayload)

    expect(response.status).toBe(200)
expect(response.body.email).toBe("home@gmail.com")

    server.close()
})

test("supertest invalid Home page email test", async function() {

    const testPayload = {
        emailHeader: "homegmail"
    }

    const response = await request(app)
        .post('/save-home-email')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Invalid email. Could not subscribe user.")

    server.close()
})

test("supertest valid Do and Dont page email test", async function() {

    const testPayload = {
        emailHeader: "dodont@gmail.com"
    }

    const response = await request(app)
        .post('/save-do&dont-email')
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body.email).toBe("dodont@gmail.com")

    server.close()
})

test("supertest invalid Do and Dont page email test", async function() {

    const testPayload = {
        emailHeader: "dodontgmail"
    }

    const response = await request(app)
        .post('/save-do&dont-email')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Invalid email. Could not subscribe user.")

    server.close()
})

test("supertest valid Report page email test", async function() {

    const testPayload = {
        emailHeader: "report@gmail.com"
    }

    const response = await request(app)
        .post('/save-report-email')
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body.email).toBe("report@gmail.com")

    server.close()
})

test("supertest invalid Report page email test", async function() {

    const testPayload = {
        emailHeader: "reportgmail"
    }

    const response = await request(app)
        .post('/save-report-email')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Invalid email. Could not subscribe user.")

    server.close()
})

// report verifications tests

test("supertest for valid report", async function(){

    const testPayload = {
        threats: '[Adware,Spyware,RAT (remote access trojan)]',
        name:"Anne",
        othername:"annonYmous",
        date:"2026-09-08",
        incident:"incident description.",
        email:"ann@gmail.com",
        phone:"N/A", // number will be accepted if starts with 01,02 and 44
        advice:false,
        assistance:true
    }
    
    const response = await request(app)
        .post('/save-report')
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body.threats).toBe('[Adware,Spyware,RAT (remote access trojan)]')
    expect(response.body.name).toBe("Anne")
    expect(response.body.othername).toBe("annonYmous")
    expect(response.body.date).toBe("2026-09-08")
    expect(response.body.incident).toBe("incident description.")
    expect(response.body.email).toBe("ann@gmail.com")
    expect(response.body.phone).toBe("N/A")
    expect(response.body.advice).toBe(false)
    expect(response.body.assistance).toBe(true)

    server.close()
})

test("supertest for invalid report", async function(){

    const testPayload = {
        threats: '[]',
        name:"anne",
        othername:"",
        date:"",
        incident:"",
        email:"anneMail",
        phone:"224934387",
        advice:false,
        assistance:false
    }
    
    const response = await request(app)
        .post('/save-report')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("User report not valid.")

    server.close()
})

// thank you email verification tests

test("supertest valid Thank you email test", async function() {

    const testPayload = {
        emailThanks: "thank@gmail.com"
    }

    const response = await request(app)
        .post('/save-thanks-email')
        .send(testPayload)

    expect(response.status).toBe(200)
    expect(response.body.emailThanks).toBe("thank@gmail.com")

    server.close()
})

test("supertest invalid Thank you email test", async function() {

    const testPayload = {
        emailThanks: "thankgmail"
    }

    const response = await request(app)
        .post('/save-thanks-email')
        .send(testPayload)

    expect(response.status).toBe(400)
    expect(response.body).toHaveProperty("error")
    expect(response.body.error).toBe("Invalid email. Could not subscribe user.")

    server.close()
})