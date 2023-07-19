import rentalsRepository from "repositories/rentals-repository";
export * as rentalsService from "services/rentals-service";
describe("Tests", () => {
  it("should work", () => {
    expect(true).toBe(true);
  })
  it("should return all rentals", async () =>{
    const mockRentals = [{rental:'aluguel1'}, {rental:'aluguel2'}];
    jest.spyOn(rentalsRepository, "getRentals").mockImplementation((): any => {
      return mockRentals
    })
    const result = await rentalsRepository.getRentals();
    expect(result).toEqual(mockRentals);
  })

  it("should return the rental by id", async () =>{
    const mockRentals = {id: 1, movie: "Barbie"}
    jest.spyOn(rentalsRepository, "getRentalById").mockImplementation((): any => {
      return mockRentals
    })
    const result = await rentalsRepository.getRentalById(mockRentals.id);
    expect(result).toEqual(mockRentals);
  })
  it("should create a rental", async () =>{
    const mockRentals = {userId: 1,
    moviesId:[1,2,3]};
    jest.spyOn(rentalsRepository, "createRental").mockImplementation((): any => {
      return mockRentals
    })
    const result = await rentalsRepository.createRental(mockRentals);
    expect(result).toEqual(mockRentals);
  })
})
