import { beforeEach, describe, expect, jest, test } from "@jest/globals";
import config from "../../../server/config";
import { Controller } from "../../../server/controller";
import { Service } from "../../../server/service";
import TestUtil from "../_util/testUtil.js";

const { pages } = config;

describe('#Controller - test for the intermediary of the application with business rules', () => {
  beforeEach(() => {
      jest.restoreAllMocks()
      jest.clearAllMocks()
  })

  
  test('getFileStream - should return a filestream', async () => {
      const controller = new Controller()
      const mockFileStream = TestUtil.generateReadableStream(['data'])
      
      jest.spyOn(
          Service.prototype,
          Service.prototype.getFileStream.name
      ).mockResolvedValue({
          stream: mockFileStream,
      })

      const expectedController = await controller.getFileStream('file')

      expect(expectedController.stream).toStrictEqual(mockFileStream)
      expect(Service.prototype.getFileStream).toHaveBeenCalled()
  })
})