import { getRewardValue } from "@/utils/getRewardValue";

describe("getRewardValue", () => {
  it("should return correct reward value for transaction of value under 50", () => {
    expect(getRewardValue(40)).toEqual(0);
  });

  it("should return correct reward value for transaction of value above 50 and under 100", () => {
    expect(getRewardValue(62)).toEqual(12);
  });

  it("should return correct reward value for transaction of value above 100", () => {
    expect(getRewardValue(142)).toEqual(184);
  });
});
