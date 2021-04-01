# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Hour.destroy_all
Material.destroy_all
Project.destroy_all
User.destroy_all




@admin = User.create!(username: 'admin', email: 'admin@gmail.com', password: '123456')
@user2 = User.create!(username: 'user2', email: 'user2@gmail.com', password: '123456')
puts "#{User.count} users created"

3.times do 
  Project.create!(project_name: Faker::Construction.subcontract_category, client_name: Faker::FunnyName.name, client_phone: Faker::PhoneNumber.cell_phone, address: Faker::Address.street_address, description: Faker::Lorem.paragraph(sentence_count: 2), bid: Faker::Number.number(digits: 4), user: @admin )
end
3.times do 
  Project.create!(project_name: Faker::Construction.subcontract_category, client_name: Faker::FunnyName.name, client_phone: Faker::PhoneNumber.cell_phone, address: Faker::Address.street_address, description: Faker::Lorem.paragraph(sentence_count: 2), bid: Faker::Number.number(digits: 4), user: @user2 )
end

Project.all.each do |project|
  3.times do
    Material.create!(name: Faker::Construction.material, price: Faker::Number.within(range: 1..20), quantity: Faker::Number.within(range: 1..10), project_id: project.id )
  end
  3.times do
    Hour.create!(date: Faker::Date.between(from: '2019-01-01', to: '2021-04-01'), hours: Faker::Number.within(range: 1..8), project_id: project.id )
  end
end

