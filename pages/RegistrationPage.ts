import { Page, Locator } from '@playwright/test';

export class RegistrationPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly streetInput: Locator;
  readonly cityInput: Locator;
  readonly zipInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly termsCheckbox: Locator;
  readonly newsletterCheckbox: Locator;
  readonly createAccountButton: Locator;
  readonly loginLink: Locator;
  readonly errorMessage: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.getByPlaceholder('Enter your first name');
    this.lastNameInput = page.getByPlaceholder('Enter your last name');
    this.emailInput = page.getByPlaceholder('Enter your email');
    this.phoneInput = page.getByPlaceholder('Enter your phone number');
    this.streetInput = page.getByPlaceholder('Enter your street address');
    this.cityInput = page.getByPlaceholder('Enter your city');
    this.zipInput = page.getByPlaceholder('Enter your ZIP code');
    this.passwordInput = page.getByPlaceholder('Create a password');
    this.confirmPasswordInput = page.getByPlaceholder('Confirm your password');
    this.termsCheckbox = page.getByLabel('I agree to the Terms and Conditions');
    this.newsletterCheckbox = page.getByLabel('Subscribe to newsletter');
    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.loginLink = page.getByRole('link', { name: 'Already have an account? Login' });
    this.errorMessage = page.locator('.error-message');
    this.successMessage = page.locator('.success-message');
  }

  async goto() {
    await this.page.goto('https://qa-test-web-app.vercel.app/register.html');
  }

  async fillForm(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    zip: string;
    password: string;
    confirmPassword: string;
  }) {
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.emailInput.fill(data.email);
    await this.phoneInput.fill(data.phone);
    await this.streetInput.fill(data.street);
    await this.cityInput.fill(data.city);
    await this.zipInput.fill(data.zip);
    await this.passwordInput.fill(data.password);
    await this.confirmPasswordInput.fill(data.confirmPassword);
  }

  async register(data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    zip: string;
    password: string;
    confirmPassword: string;
  }, acceptTerms: boolean = true) {
    await this.fillForm(data);
    if (acceptTerms) {
      await this.termsCheckbox.check();
    }
    await this.createAccountButton.click();
  }
}