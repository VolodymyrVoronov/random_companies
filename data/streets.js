const streets = [
  "Cherry Street",
  "12th Street East",
  "Ivy Lane",
  "Route 4",
  "York Street",
  "Oak Street",
  "Briarwood Court",
  "Hanover Court",
  "Holly Drive",
  "Railroad Street",
  "Linden Street",
  "Route 1",
  "Jefferson Court",
  "White Street",
  "Berkshire Drive",
  "Fawn Lane",
  "Maiden Lane",
  "Lincoln Avenue",
  "King Street",
  "Queen Street",
  "Broad Street",
  "State Street",
  "Locust Street",
  "Jones Street",
  "Cambridge Road",
  "Sheffield Drive",
  "Durham Road",
  "10th Street",
  "Monroe Drive",
  "Grove Street",
  "Market Street",
  "Creek Road",
  "Myrtle Street",
  "Ridge Street",
  "8th Street West",
  "Circle Drive",
  "Canterbury Drive",
  "West Street",
  "Cypress Court",
  "North Avenue",
  "Water Street",
  "Chestnut Street",
  "School Street",
  "Jackson Street",
  "Edgewood Drive",
  "3rd Street North",
  "Fulton Street",
  "Clay Street",
  "West Avenue",
  "Route 9",
  "Sunset Drive",
  "Park Place",
  "Laurel Drive",
  "John Street",
  "Church Street",
  "Hartford Road",
  "Woodland Drive",
  "Route 29",
  "Evergreen Lane",
  "12th Street",
  "Country Club Road",
  "Prospect Avenue",
  "Pennsylvania Avenue",
  "Park Drive",
  "Broad Street West",
  "Forest Avenue",
  "College Street",
  "Brown Street",
  "Hickory Street",
  "Deerfield Drive",
  "Spruce Street",
  "Tanglewood Drive",
  "State Street East",
  "Ridge Avenue",
  "Columbia Street",
  "Route 20",
  "2nd Avenue",
  "Penn Street",
  "Pearl Street",
  "Lafayette Street",
  "Front Street South",
  "Main Street West",
  "Buttonwood Drive",
  "4th Street West",
  "Franklin Court",
  "Warren Street",
  "Glenwood Avenue",
  "Old York Road",
  "6th Street",
  "B Street",
  "Lake Avenue",
  "2nd Street East",
  "Bridle Lane",
  "Taylor Street",
  "Victoria Court",
  "Rosewood Drive",
  "Depot Street",
  "Cedar Court",
  "Franklin Street",
  "Atlantic Avenue",
  "Ridge Road",
  "George Street",
  "Riverside Drive",
  "Park Street",
  "Liberty Street",
  "Colonial Avenue",
  "Pin Oak Drive",
  "Route 6",
  "Garfield Avenue",
  "Mulberry Lane",
  "Sherman Street",
  "Crescent Street",
  "Grove Avenue",
  "Lincoln Street",
  "3rd Avenue",
  "River Road",
  "Maple Lane",
  "New Street",
  "Pheasant Run",
  "Oak Avenue",
  "Buckingham Drive",
  "Valley Drive",
  "Ivy Court",
  "Route 27",
  "Church Street South",
  "Oxford Road",
  "Roberts Road",
  "Aspen Drive",
  "Belmont Avenue",
  "Dogwood Lane",
  "Bridle Court",
  "Country Lane",
  "Route 100",
  "Henry Street",
  "Clinton Street",
  "Creekside Drive",
  "Hill Street",
  "Roosevelt Avenue",
  "Church Road",
  "Meadow Street",
  "Schoolhouse Lane",
  "Ashley Court",
  "Cherry Lane",
  "Adams Avenue",
  "Lakeview Drive",
  "Route 2",
  "Hillcrest Avenue",
  "Central Avenue",
  "Parker Street",
  "Washington Avenue",
  "Walnut Avenue",
  "Jackson Avenue",
  "Catherine Street",
  "Cambridge Drive",
  "Elmwood Avenue",
  "Route 202",
  "Academy Street",
  "Cedar Street",
  "Mulberry Street",
  "5th Street East",
  "1st Street",
  "Chestnut Avenue",
  "Vine Street",
  "5th Avenue",
  "Locust Lane",
  "Overlook Circle",
  "Lantern Lane",
  "Bridge Street",
  "Augusta Drive",
  "Grant Street",
  "Mill Street",
  "East Street",
  "Orchard Street",
  "Carriage Drive",
  "Canterbury Road",
  "Country Club Drive",
  "Route 10",
  "6th Avenue",
  "Inverness Drive",
  "Evergreen Drive",
  "Holly Court",
  "Shady Lane",
  "Beechwood Drive",
  "Grand Avenue",
  "13th Street",
  "Highland Drive",
  "Hamilton Street",
  "College Avenue",
  "Edgewood Road",
  "Arch Street",
  "Harrison Avenue",
  "3rd Street",
  "Delaware Avenue",
  "Jefferson Street",
  "Cedar Avenue",
  "Lexington Court",
  "Mill Road",
  "Eagle Street",
  "Hillside Avenue",
  "Cottage Street",
  "Route 7",
  "Sycamore Lane",
  "Homestead Drive",
  "Orchard Lane",
  "Franklin Avenue",
  "Route 11",
  "Route 70",
  "Briarwood Drive",
  "Devonshire Drive",
  "Cemetery Road",
  "Garden Street",
  "Route 17",
  "Heather Lane",
  "Valley View Drive",
  "Hawthorne Avenue",
  "Heather Court",
  "Sycamore Street",
  "Fairway Drive",
  "Route 5",
  "Hillcrest Drive",
  "Lilac Lane",
  "Orange Street",
  "Mechanic Street",
  "5th Street North",
  "Church Street North",
  "Canterbury Court",
  "Bay Street",
  "Dogwood Drive",
  "2nd Street North",
  "Willow Drive",
  "Main Street",
  "Green Street",
  "Main Street North",
  "River Street",
  "Mulberry Court",
  "Canal Street",
  "Fieldstone Drive",
  "Madison Avenue",
  "Glenwood Drive",
  "Essex Court",
  "Maple Avenue",
  "Street Road",
  "Westminster Drive",
  "Spring Street",
  "8th Street South",
  "Poplar Street",
  "Hamilton Road",
  "Fairview Avenue",
  "8th Avenue",
  "Devon Court",
  "Route 44",
  "4th Street",
  "9th Street West",
  "William Street",
  "4th Avenue",
  "Willow Lane",
  "Lafayette Avenue",
  "Colonial Drive",
  "Amherst Street",
  "Morris Street",
  "5th Street West",
  "Race Street",
  "Lawrence Street",
  "9th Street",
  "Highland Avenue",
  "Union Street",
  "Manor Drive",
  "11th Street",
  "Fairview Road",
  "Hilltop Road",
  "Heritage Drive",
  "Virginia Street",
  "Harrison Street",
  "Meadow Lane",
  "8th Street",
  "Linden Avenue",
  "7th Avenue",
  "Willow Street",
  "Surrey Lane",
  "Brookside Drive",
  "Magnolia Drive",
  "Pleasant Street",
  "2nd Street",
  "3rd Street West",
  "Washington Street",
  "Andover Court",
  "3rd Street East",
  "Forest Street",
  "Grant Avenue",
  "Primrose Lane",
  "Cross Street",
  "6th Street North",
  "Sunset Avenue",
  "Bayberry Drive",
  "Main Street South",
  "Spruce Avenue",
  "Winding Way",
  "Park Avenue",
  "Summit Avenue",
  "East Avenue",
  "Woodland Road",
  "Myrtle Avenue",
  "Virginia Avenue",
  "North Street",
  "Monroe Street",
  "Madison Court",
  "Ann Street",
  "Cleveland Street",
  "Cardinal Drive",
  "Walnut Street",
  "Route 30",
  "Windsor Court",
  "Redwood Drive",
  "14th Street",
  "Lake Street",
  "Marshall Street",
  "Pine Street",
  "Hickory Lane",
  "Route 41",
  "Eagle Road",
  "Sycamore Drive",
  "Chapel Street",
  "Magnolia Court",
  "Aspen Court",
  "Madison Street",
  "5th Street",
  "Jefferson Avenue",
  "Strawberry Lane",
  "Summit Street",
  "Hawthorne Lane",
  "Clark Street",
  "Oxford Court",
  "Route 64",
  "Forest Drive",
  "Main Street East",
  "Rose Street",
  "5th Street South",
  "Bank Street",
  "Magnolia Avenue",
  "4th Street South",
  "Elm Street",
  "Warren Avenue",
  "Williams Street",
  "Woodland Avenue",
  "York Road",
  "Summer Street",
  "Valley Road",
  "Laurel Street",
  "Wood Street",
  "Front Street North",
  "Cambridge Court",
  "Elm Avenue",
  "South Street",
  "Cedar Lane",
  "Wall Street",
  "Maple Street",
  "Devon Road",
  "Arlington Avenue",
  "Somerset Drive",
  "Howard Street",
  "Broadway",
  "Railroad Avenue",
  "6th Street West",
  "Front Street",
  "Euclid Avenue",
  "7th Street",
  "Prospect Street",
  "1st Avenue",
  "Durham Court",
  "James Street",
  "Fawn Court",
  "Hillside Drive",
  "Adams Street",
  "Cooper Street",
  "Cobblestone Court",
  "Sherwood Drive",
  "Windsor Drive",
  "Brandywine Drive",
  "Orchard Avenue",
  "Hudson Street",
  "Charles Street",
  "Court Street",
  "Route 32",
  "Center Street",
  "Beech Street",
  "4th Street North",
  "Elizabeth Street",
  "Valley View Road",
  "Brook Lane",
  "Smith Street",
  "Willow Avenue",
  "Cleveland Avenue",
  "Linda Lane",
  "Laurel Lane",
  "2nd Street West",
  "Oak Lane",
  "High Street",
  "Olive Street",
  "Lexington Drive",
  "Division Street",
];

export default streets;
