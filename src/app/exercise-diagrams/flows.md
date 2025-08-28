## ER
Place
- id
- price_per_hour
- location
- description

User
- id 
- name
- lastName
- age
- idNumber

BookingHistory
- id
- UserId
- Booking[]

Booking
- id
- PlaceId
- Time (hours)
- UserId

## Sequence
- User -> Select a  Place
- Place -> shows information
- User -> Confirm Booking
- Booking -> added to BookinghHistory 
- Service -> Send to back

## State
