
  document.addEventListener('DOMContentLoaded', () => {
    const tabs   = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.tab-panel');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Deactivate all tabs + hide all panels
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.add('hidden'));

        // Activate clicked tab
        tab.classList.add('active');
        // Show corresponding panel
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.remove('hidden');
      });
    });
  });


  
