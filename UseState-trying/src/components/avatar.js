

document.addEventListener('DOMContentLoaded', () => {
    const avatarGallery = document.getElementById('avatarGallery');
const searchInput = document.getElementById('Filter');




    const fetchAvatars = async () => {
        try {
            const response = await fetch('https://randomuser.me/api/?results=10');
            const data = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching avatars:', error);
            return [];
        }
    };
console.log(fetchAvatars)
    const displayAvatars = (avatars) => {
        avatarGallery.innerHTML = ''; // Clear previous content

        avatars.forEach((avatar) => {
            const avatarContainer = document.createElement('div');
            avatarContainer.innerHTML = `
                <img src="${avatar.picture.large}" alt="avatar">
                <p>${avatar.name.first} ${avatar.name.last}</p>
            `;
            avatarGallery.appendChild(avatarContainer);
        });
    };

    const filterAvatars = (searchTerm, avatars) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return avatars.filter((avatar) =>
            avatar.name.first.toLowerCase().includes(lowerCaseSearchTerm) ||
            avatar.name.last.toLowerCase().includes(lowerCaseSearchTerm)
        );
    };

    // const searchInput = document.createElement('input');
    // searchInput.type = 'text';
    // searchInput.placeholder = 'Filter by name';

    searchInput.addEventListener('input',async () => {
        const searchTerm = searchInput.value;
        const avatars = await fetchAvatars();
        const filteredAvatars = filterAvatars(searchTerm, avatars);
        displayAvatars(filteredAvatars);
    });


    // Initial fetch and display
    fetchAvatars().then((avatars) => {
        displayAvatars(avatars)
        });
});
