import exp from "constants";
import path from "path";

describe("rooms.html", () => {
  const dialogHandler2 = jest.fn(dialog => dialog.accept("200"));

  beforeAll(async () => {
    const URL = `file:///${path.resolve(__dirname, "./rooms.html")}`;
    page.on("dialog", dialogHandler2);
    await page.goto(URL, {
      waitUntil: "networkidle2"
    });
  });

  it("daily rate line: $200", async () => {
    await page.waitForSelector('#dailyrate');
    const element = await page.$('#dailyrate');
    const value = await page.evaluate(el => el.textContent, element);
    expect(value).toMatch(/^\$.*[^0-9\.]200$/);
  });
  
  it("GST line: $10", async () => {
    await page.waitForSelector('#gst');
    const element = await page.$('#gst');
    const value = await page.evaluate(el => el.textContent, element);
    expect(value).toMatch(/^\$.*[^0-9\.]10$/);
  });
  
  it("PST line: 16", async () => {
    await page.waitForSelector('#pst');
    const element = await page.$('#pst');
    const value = await page.evaluate(el => el.textContent, element);
    expect(value).toMatch(/^\$.*[^0-9\.]16$/);
  });
  
  it("total line: 226", async () => {
    await page.waitForSelector('#total');
    const element = await page.$('#total');
    const value = await page.evaluate(el => el.textContent, element);
    expect(value).toMatch(/^\$.*[^0-9\.]226$/);
  });
  
  it("should display a dialog", () => {
    expect(dialogHandler2).toHaveBeenCalled();
  });
});
