const loadPhone = async (searchText) => {
  const apiUrl = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  console.log('API URL:', apiUrl);

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log('API Response:', data);

    const phones = data.data;
    displayPhones(phones);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayPhones = phones => {
  const phoneContainer = document.getElementById('phone-container');
  phoneContainer.innerHTML = ''; // Clear container cards before adding new cards

  phones.forEach(phone => {
    console.log(phone);
    // 2. create a div
    const phoneCard = document.createElement('div');
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    // 3: set innerHTML
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
};

// handle search button
const handleSearch = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  console.log('Search Text:', searchText);
  loadPhone(searchText);
};

// Initially load all phones
loadPhone('');
