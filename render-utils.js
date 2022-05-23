export function renderWorkshop(workshop) {
    const div = document.createElement('div');
    div.classList.add('workshop');
    const h2 = document.createElement('h2');
    h2.textContent = workshop.name;

    const ul = document.createElement('ul');
    for (let participant of workshop.participants) {
        const li = document.createElement('li');
        li.textContent = `${participant.name}: ${participant.contact_info}`;
        ul.append(li);
    }
    div.append(h2, ul);
    return div;
}

export function renderOption(workshop) 
