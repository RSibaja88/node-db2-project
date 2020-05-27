
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {make: 'Toyota', model: 'Corolla', mileage: 75678, vin: '31998263737445968', autotrans: true, titleStatus: 'clean'},
        {make: 'Nissan', model: '370z', mileage: 15654, vin: '58848932622950471', autotrans: false, titleStatus: 'clean'},
        {make: 'Honda', model: 'Pilot', mileage: 95554, vin: '33957730472629306', autotrans: true, titleStatus: 'salvage'},
        {make: 'Honda', model: 'Civic', mileage: 179872, vin: '76142849562993745', autotrans: false, titleStatus: 'rebuilt'},
        {make: 'Ford', model: 'Explorer', mileage: 12995, vin: '44562295099804959', autotrans: true, titleStatus: 'clean'},
        {make: 'Nissan', model: 'Versa', mileage: 134567, vin: '19987355975554723', autotrans: true, titleStatus: 'clean'}
      ]);
    });
};
