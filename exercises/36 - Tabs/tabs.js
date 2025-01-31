const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role= "tab"]');
const tabPanels = tabs.querySelectorAll('[role= "tabpanel"]');

function handleTabClick(event) {
  // Hide all the tab panels
  tabPanels.forEach(panel => (panel.hidden = true));
  // Mark all tabs as unselected
  tabButtons.forEach(tab => {
    // tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  // Mark the clicked tab as selected
  event.currentTarget.setAttribute('aria-selected', true);
  //find the associated tabPanel and show it
  const { id } = event.currentTarget;
  const tabPanel = tabs.querySelector(`[aria-labelledby=${id}]`);
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
