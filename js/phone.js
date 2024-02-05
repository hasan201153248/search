let allPhones; // To store all phones for later use

const loadPhone = async (searchText) => {
  const apiUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    allPhones = data.data; // Store all phones

    // Display only the first 5 phones initially
    displayPhones(allPhones.slice(0, 5));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayPhones = phones => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = ''; // Clear container cards before adding new cards

  const showAllContainer = document.getElementById('show-all-container');
  
  phones.forEach(phone => {
    // create a div for each phone
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    phoneCard.innerHTML = `<figure><img src="${phone.image}" alt="Phone" /></figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name}</h2>
        <p>${phone.description}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
          <button class="btn btn-secondary">Secondary</button>
        </div>
      </div>`;

    // Append the phoneCard inside the loop
    phoneContainer.appendChild(phoneCard);
  });

  // Toggle the visibility of the "Show All" button
  if (allPhones.length > 5) {
    showAllContainer.classList.remove('hidden');
  } else {
    showAllContainer.classList.add('hidden');
  }
};

const showAllPhones = () => {
  // Display all phones when "Show All" button is clicked
  displayPhones(allPhones);
};

// handle search button
const handleSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  loadPhone(searchText);
};

// Initially load all phones
loadPhone('');
