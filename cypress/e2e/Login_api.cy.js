//<reference types="cypress" />

describe('Authentication', () => {
    it('Try to Login with wrong password', () => {
        cy.request({
            method: 'POST',
            url: 'https://sandbox.cialfo.sg/v3/sessions?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&locale=en-US&captcha_token=',
            headers: {
                'Content-Type': 'application/json',
                'platform': 'web'
            },
            failOnStatusCode: false,
            body: {"user":{"email_or_phone":"hamid+student+6ths@cialfo.com.sg","password":"wrong-passsword","device_info":{"platform":"web"}}}
        }).its('status').should('eq', 401)
    })

    it('Try to Login with wrong email', () => {
        cy.request({
            method: 'POST',
            url: 'https://sandbox.cialfo.sg/v3/sessions?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&locale=en-US&captcha_token=',
            headers: {
                'Content-Type': 'application/json',
                'platform': 'web'
            },
            failOnStatusCode: false,
            body: {"user":{"email_or_phone":"wrong@cialfo.com.sg","password":"11111111111","device_info":{"platform":"web"}}}
        }).its('status').should('eq', 401)
    })

    it('Try to Login with wrong email and password', () => {
        cy.request({
            method: 'POST',
            url: 'https://sandbox.cialfo.sg/v3/sessions?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&locale=en-US&captcha_token=',
            headers: {
                'Content-Type': 'application/json',
                'platform': 'web'
            },
            failOnStatusCode: false,
            body: {"user":{"email_or_phone":"wrong@cialfo.com.sg","password":"wrong-password","device_info":{"platform":"web"}}}
        }).its('status').should('eq', 401)
    })
    it('Try to Login with valid email and password', () => {
        cy.request({
            method: 'POST',
            url: 'https://sandbox.cialfo.sg/v3/sessions?access_token=Zx2EE58K0tyzL8V4Xh7GLYYhQzHcz7Q05jrRXAcfw1&locale=en-US&captcha_token=',
            headers: {
                'Content-Type': 'application/json',
                'platform': 'web'
            },
            failOnStatusCode: false,
            body: {"user":{"email_or_phone":"hamid+student+6ths@cialfo.com.sg","password":"11111111","device_info":{"platform":"web"}}}
        }).its('status').should('eq', 200)

})

})
