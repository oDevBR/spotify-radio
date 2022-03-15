import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import fs from "fs";
import fsPromises from "fs/promises";
import { join } from "path";
import config from "../../../server/config";
import { Service } from "../../../server/service";
import TestUtil from "../_util/testUtil.js";

describe("#Service - test for all processing and business rules", () => {
  beforeEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  test("createFileStream - should create a file stream", async () => {
    const service = new Service();
    const mockedFile = "file.ext";
    const mockFileStream = TestUtil.generateReadableStream(["data"]);

    jest.spyOn(fs, fs.createReadStream.name).mockResolvedValue(mockFileStream);

    const expectedFileStream = await service.createFileStream(mockedFile);

    expect(expectedFileStream).toStrictEqual(mockFileStream);
  });

  test("getFileInfo - should return file name and type", async () => {
    const service = new Service();
    const mockedFile = "file.ext";
    const mockedFileType = ".ext";
    const mockedFullPath = join(config.dir.publicDirectory, mockedFile);

    jest.spyOn(fsPromises, fsPromises.access.name).mockReturnValue();

    const expectedFile = await service.getFileInfo(mockedFile);

    expect(expectedFile.type).toEqual(mockedFileType);
    expect(expectedFile.name).toEqual(mockedFullPath);
  });

  test("getFileStream - should return file stream and type", async () => {
    const service = new Service();
    const mockedFile = "file.ext";
    const mockedFileType = ".ext";
    const mockedFullPath = join(config.dir.publicDirectory, mockedFile);
    const mockFileStream = TestUtil.generateReadableStream(["data"]);

    jest
      .spyOn(Service.prototype, Service.prototype.createFileStream.name)
      .mockResolvedValue(mockFileStream);
    jest
      .spyOn(Service.prototype, Service.prototype.getFileInfo.name)
      .mockResolvedValue({
        name: mockedFullPath,
        type: mockedFileType,
      });

    const expectedFile = await service.getFileStream(mockedFile);

    expect(expectedFile.stream).resolves.toEqual(mockFileStream);
    expect(expectedFile.type).toEqual(mockedFileType);
  });
});
