import { ReturnObject, resizeImage } from "../../utils/utilities";

const validFileName = "encenadaport";
const validWidth = 100;
const validHeight = 100;

const invalidFileName = "@@encenadaport";
const invalidWidth = Number("x");
const invalidHeight = Number("x");

describe("Test Image Processing utilities", () => {
  it("resizes valid (filename,width,height) ", async () => {
    let result: ReturnObject = { path: "", message: "", error: 0 };
    result = await resizeImage(validFileName, validWidth, validHeight);
    expect(result.error).toBe(0);
  });
  describe("resizeimage exceptions", () => {
    it("should reject for filename not exist ", async () => {
      let result: ReturnObject = { path: "", message: "", error: 0 };
      result = await resizeImage(invalidFileName, validWidth, validHeight);
      expect(result.error).toBe(404);
    });
    it("should reject for invalid filename ", async () => {
      let result: ReturnObject = { path: "", message: "", error: 0 };
      result = await resizeImage("", validWidth, validHeight);
      expect(result.error).toBe(400);
    });
    it("should reject for invalid width ", async () => {
      let result: ReturnObject = { path: "", message: "", error: 0 };
      result = await resizeImage(validFileName, invalidWidth, validHeight);
      expect(result.error).toBe(400);
    });
    it("should reject for invalid height ", async () => {
      let result: ReturnObject = { path: "", message: "", error: 0 };
      result = await resizeImage(validFileName, validWidth, invalidHeight);
      expect(result.error).toBe(400);
    });
  });
});
