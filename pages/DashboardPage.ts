import { Page, Locator } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  readonly welcomeMessage: Locator;
  readonly lastLoginTimestamp: Locator;
  readonly logoutButton: Locator;
  readonly updateProfileButton: Locator;
  readonly settingsButton: Locator;
  readonly contactSupportButton: Locator;
  readonly downloadReportButton: Locator;
  readonly profileCompletion: Locator;
  readonly accountStatus: Locator;
  readonly recentActivity: Locator;

  constructor(page: Page) {
    this.page = page;
    this.welcomeMessage = page.locator('h2');
    this.lastLoginTimestamp = page.locator('.last-login');
    this.logoutButton = page.getByRole('button', { name: 'Logout' });
    this.updateProfileButton = page.getByRole('button', { name: 'Update Profile' });
    this.settingsButton = page.getByRole('button', { name: 'Settings' });
    this.contactSupportButton = page.getByRole('button', { name: 'Contact Support' });
    this.downloadReportButton = page.getByRole('button', { name: 'Download Report' });
    this.profileCompletion = page.locator('.profile-completion');
    this.accountStatus = page.locator('.account-status');
    this.recentActivity = page.locator('.recent-activity');
  }

  async logout() {
    await this.logoutButton.click();
  }

  async isWelcomeMessageVisible() {
    return await this.welcomeMessage.isVisible();
  }

  async getWelcomeMessageText() {
    return await this.welcomeMessage.textContent();
  }
}
