import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import { Controller } from "../../../server/controller";
import { Service } from "../../../server/service";
import TestUtil from "../_util/testUtil.js";

describe("#Controller - test suite for controller calls", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("getFileStream - should return a file stream", async () => {
    const controller = new Controller();
    const mockFileStream = TestUtil.generateReadableStream(["data"]);

    jest
      .spyOn(Service.prototype, Service.prototype.getFileStream.name)
      .mockResolvedValue({
        stream: mockFileStream,
      });

    const expectedController = await controller.getFileStream("file");

    expect(expectedController.stream).toStrictEqual(mockFileStream);
    expect(Service.prototype.getFileStream).toHaveBeenCalled();
  });
});
