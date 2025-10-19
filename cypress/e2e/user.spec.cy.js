import userData from "../fixtures/userData.json";
import LoginPage from "../pages/loginpage";
import DashboardPage from "../pages/dashboardPage";
import MenuPage from "../pages/menuPage";
import MyInfoPage from "../pages/myInfoPage";

const loginPage = new LoginPage();
const dashboardPage = new DashboardPage();
const menuPage = new MenuPage();
const myInfoPage = new MyInfoPage();

describe("Login Orange HRM Tests", () => {
  it("User Info Update - Success", () => {
    loginPage.accessLoginPage();
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    );

    dashboardPage.checkDashboardPage();

    menuPage.accessMyInfo();

    myInfoPage.fillPersonalDetails("First Name", "Last Name", "nickName");
    myInfoPage.fillEmployeeDetails("EmployId","otherId","Drivers Number","2025-07-29");
    myInfoPage.fillStatus();
    myInfoPage.saveForm();
  });
});
