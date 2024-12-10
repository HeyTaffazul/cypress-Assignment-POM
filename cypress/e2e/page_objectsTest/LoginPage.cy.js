import login from "../../support/PageObject/LoginTest.cy";
import links from "../../support/PageObject/link.cy";

describe('', () => {

  const login1 = new login();
  const link1 = new links();

  it('', () => {
   login1.EnterURL();
   login1.loginOrm();
   link1.clickLink('Admin');


  });
});