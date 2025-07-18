// Application Data - Hierarchy and Suppliers
const hierarchyData = {
  "Moulding": {
    "Aluminum": {
      "ADC12": ["HPDC", "LPDC", "Investment Casting", "Vacuum Casting"],
      "6061": ["HPDC", "LPDC", "Investment Casting", "Vacuum Casting"],
      "2024": ["HPDC", "LPDC", "Investment Casting", "Vacuum Casting"],
      "7075": ["HPDC", "LPDC", "Investment Casting", "Vacuum Casting"]
    },
    "Zinc": {
      "Zamak 3": ["HPDC", "LPDC", "Investment Casting"],
      "Zamak 5": ["HPDC", "LPDC", "Investment Casting"],
      "ZA-8": ["HPDC", "LPDC", "Investment Casting"],
      "ZA-12": ["HPDC", "LPDC", "Investment Casting"],
      "ZA-27": ["HPDC", "LPDC", "Investment Casting"]
    },
    "Plastic": {
      "ABS": ["Injection Molding", "Vacuum Casting", "Blow Molding"],
      "Polycarbonate": ["Injection Molding", "Vacuum Casting", "Blow Molding"],
      "Polypropylene": ["Injection Molding", "Vacuum Casting", "Blow Molding"],
      "Nylon": ["Injection Molding", "Vacuum Casting", "Blow Molding"]
    },
    "Rubber": {
      "Natural Rubber": ["Compression Molding", "Injection Molding", "Vacuum Casting"],
      "Silicone": ["Compression Molding", "Injection Molding", "Vacuum Casting"],
      "EPDM": ["Compression Molding", "Injection Molding", "Vacuum Casting"]
    }
  },
  "Sheet Metal Pressing": {
    "Steel": {
      "Mild Steel": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"],
      "Stainless Steel": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"],
      "High Carbon Steel": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"]
    },
    "Aluminum": {
      "6061": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"],
      "2024": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"],
      "7075": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"]
    },
    "Copper": {
      "Pure Copper": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"],
      "Brass": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"],
      "Bronze": ["Blanking", "Piercing", "Bending", "Drawing", "Embossing"]
    }
  },
  "Machining": {
    "Aluminum": {
      "6061": ["CNC Milling", "CNC Turning", "Drilling", "Grinding"],
      "2024": ["CNC Milling", "CNC Turning", "Drilling", "Grinding"],
      "7075": ["CNC Milling", "CNC Turning", "Drilling", "Grinding"]
    },
    "Steel": {
      "Mild Steel": ["CNC Milling", "CNC Turning", "Drilling", "Grinding"],
      "Stainless Steel": ["CNC Milling", "CNC Turning", "Drilling", "Grinding"],
      "Tool Steel": ["CNC Milling", "CNC Turning", "Drilling", "Grinding"]
    },
    "Plastic": {
      "ABS": ["CNC Milling", "CNC Turning", "Drilling"],
      "Polycarbonate": ["CNC Milling", "CNC Turning", "Drilling"],
      "Nylon": ["CNC Milling", "CNC Turning", "Drilling"]
    }
  },
  "Assembly": {
    "Mechanical": {
      "Welding": ["Arc Welding", "TIG Welding", "MIG Welding", "Spot Welding"],
      "Fastening": ["Bolting", "Riveting", "Screwing", "Clipping"],
      "Adhesive": ["Structural Bonding", "Sealing", "Potting", "Gasket Assembly"]
    },
    "Electronic": {
      "PCB Assembly": ["SMT Assembly", "Through-hole Assembly", "Mixed Assembly"],
      "Wire Harness": ["Crimping", "Soldering", "Heat Shrinking", "Bundling"],
      "Testing": ["Functional Testing", "Burn-in Testing", "Environmental Testing"]
    }
  },
  "Post Processing": {
    "Surface Treatment": {
      "Coating": ["Powder Coating", "Electroplating", "Anodizing", "Painting"],
      "Finishing": ["Polishing", "Sandblasting", "Tumbling", "Vibratory Finishing"],
      "Heat Treatment": ["Annealing", "Tempering", "Hardening", "Stress Relief"]
    },
    "Quality Control": {
      "Inspection": ["Dimensional Inspection", "Surface Inspection", "Material Testing"],
      "Testing": ["Functional Testing", "Durability Testing", "Environmental Testing"]
    }
  }
};

const suppliersData = [
  {
    "id": 1,
    "name": "Precision Cast Solutions",
    "location": "Detroit, MI",
    "phone": "+1-313-555-0123",
    "email": "info@precisioncast.com",
    "website": "www.precisioncast.com",
    "specialties": ["Aluminum", "HPDC", "ADC12", "6061"],
    "processes": ["Moulding"],
    "materials": ["Aluminum"],
    "grades": ["ADC12", "6061", "2024"],
    "subProcesses": ["HPDC", "LPDC"],
    "certifications": ["ISO 9001", "AS9100"],
    "capabilities": "High-pressure die casting specialist with 25+ years experience. Automotive and aerospace certified facility.",
    "minOrderQty": 1000,
    "maxOrderQty": 100000,
    "rating": 4.8
  },
  {
    "id": 2,
    "name": "Advanced Aluminum Works",
    "location": "Los Angeles, CA",
    "phone": "+1-213-555-0456",
    "email": "sales@advancedaluminum.com",
    "website": "www.advancedaluminum.com",
    "specialties": ["Aluminum", "LPDC", "Investment Casting", "7075"],
    "processes": ["Moulding"],
    "materials": ["Aluminum"],
    "grades": ["6061", "7075", "2024"],
    "subProcesses": ["LPDC", "Investment Casting"],
    "certifications": ["ISO 9001", "NADCAP"],
    "capabilities": "Low-pressure die casting and investment casting for aerospace and defense applications.",
    "minOrderQty": 500,
    "maxOrderQty": 50000,
    "rating": 4.9
  },
  {
    "id": 3,
    "name": "Zinc Masters Inc",
    "location": "Chicago, IL",
    "phone": "+1-312-555-0789",
    "email": "orders@zincmasters.com",
    "website": "www.zincmasters.com",
    "specialties": ["Zinc", "HPDC", "Zamak 3", "Zamak 5"],
    "processes": ["Moulding"],
    "materials": ["Zinc"],
    "grades": ["Zamak 3", "Zamak 5", "ZA-8"],
    "subProcesses": ["HPDC", "LPDC"],
    "certifications": ["ISO 9001", "TS 16949"],
    "capabilities": "Zinc die casting specialist serving automotive, electronics, and consumer goods industries.",
    "minOrderQty": 2000,
    "maxOrderQty": 200000,
    "rating": 4.7
  },
  {
    "id": 4,
    "name": "Plastic Precision Molding",
    "location": "San Jose, CA",
    "phone": "+1-408-555-0321",
    "email": "contact@plasticprecision.com",
    "website": "www.plasticprecision.com",
    "specialties": ["Plastic", "Injection Molding", "ABS", "Polycarbonate"],
    "processes": ["Moulding"],
    "materials": ["Plastic"],
    "grades": ["ABS", "Polycarbonate", "Nylon"],
    "subProcesses": ["Injection Molding", "Vacuum Casting"],
    "certifications": ["ISO 9001", "ISO 14001"],
    "capabilities": "High-volume plastic injection molding with clean room capabilities for medical and electronics.",
    "minOrderQty": 5000,
    "maxOrderQty": 500000,
    "rating": 4.6
  },
  {
    "id": 5,
    "name": "Rubber Solutions LLC",
    "location": "Akron, OH",
    "phone": "+1-330-555-0654",
    "email": "info@rubbersolutions.com",
    "website": "www.rubbersolutions.com",
    "specialties": ["Rubber", "Silicone", "Natural Rubber", "Compression Molding"],
    "processes": ["Moulding"],
    "materials": ["Rubber"],
    "grades": ["Natural Rubber", "Silicone", "EPDM"],
    "subProcesses": ["Compression Molding", "Injection Molding"],
    "certifications": ["ISO 9001", "FDA"],
    "capabilities": "Custom rubber molding for automotive, medical, and industrial sealing applications.",
    "minOrderQty": 1000,
    "maxOrderQty": 100000,
    "rating": 4.5
  },
  {
    "id": 6,
    "name": "MetalForm Industries",
    "location": "Pittsburgh, PA",
    "phone": "+1-412-555-0987",
    "email": "sales@metalform.com",
    "website": "www.metalform.com",
    "specialties": ["Steel", "Sheet Metal Pressing", "Blanking", "Drawing"],
    "processes": ["Sheet Metal Pressing"],
    "materials": ["Steel", "Aluminum"],
    "grades": ["Mild Steel", "Stainless Steel", "6061"],
    "subProcesses": ["Blanking", "Piercing", "Bending", "Drawing"],
    "certifications": ["ISO 9001", "TS 16949"],
    "capabilities": "Progressive die stamping and deep drawing for automotive and appliance industries.",
    "minOrderQty": 10000,
    "maxOrderQty": 1000000,
    "rating": 4.8
  },
  {
    "id": 7,
    "name": "Precision Machining Corp",
    "location": "Houston, TX",
    "phone": "+1-713-555-0246",
    "email": "quotes@precisionmachining.com",
    "website": "www.precisionmachining.com",
    "specialties": ["Aluminum", "CNC Milling", "CNC Turning", "7075"],
    "processes": ["Machining"],
    "materials": ["Aluminum", "Steel"],
    "grades": ["7075", "6061", "Stainless Steel"],
    "subProcesses": ["CNC Milling", "CNC Turning", "Grinding"],
    "certifications": ["ISO 9001", "AS9100", "NADCAP"],
    "capabilities": "5-axis CNC machining for aerospace and defense precision components.",
    "minOrderQty": 1,
    "maxOrderQty": 10000,
    "rating": 4.9
  },
  {
    "id": 8,
    "name": "Assembly Systems Inc",
    "location": "Phoenix, AZ",
    "phone": "+1-602-555-0135",
    "email": "info@assemblysystems.com",
    "website": "www.assemblysystems.com",
    "specialties": ["Mechanical", "Welding", "Arc Welding", "TIG Welding"],
    "processes": ["Assembly"],
    "materials": ["Mechanical", "Electronic"],
    "grades": ["Welding", "PCB Assembly"],
    "subProcesses": ["Arc Welding", "TIG Welding", "SMT Assembly"],
    "certifications": ["ISO 9001", "IPC-610"],
    "capabilities": "Complete electro-mechanical assembly with automated testing capabilities.",
    "minOrderQty": 100,
    "maxOrderQty": 50000,
    "rating": 4.7
  },
  {
    "id": 9,
    "name": "Surface Tech Solutions",
    "location": "Cleveland, OH",
    "phone": "+1-216-555-0369",
    "email": "service@surfacetech.com",
    "website": "www.surfacetech.com",
    "specialties": ["Surface Treatment", "Coating", "Anodizing", "Powder Coating"],
    "processes": ["Post Processing"],
    "materials": ["Surface Treatment"],
    "grades": ["Coating", "Finishing"],
    "subProcesses": ["Anodizing", "Powder Coating", "Polishing"],
    "certifications": ["ISO 9001", "NADCAP"],
    "capabilities": "Complete surface finishing services including anodizing, powder coating, and plating.",
    "minOrderQty": 500,
    "maxOrderQty": 100000,
    "rating": 4.6
  },
  {
    "id": 10,
    "name": "Investment Cast Specialists",
    "location": "Denver, CO",
    "phone": "+1-303-555-0741",
    "email": "info@investmentcast.com",
    "website": "www.investmentcast.com",
    "specialties": ["Aluminum", "Investment Casting", "6061", "7075"],
    "processes": ["Moulding"],
    "materials": ["Aluminum"],
    "grades": ["6061", "7075", "2024"],
    "subProcesses": ["Investment Casting", "Vacuum Casting"],
    "certifications": ["ISO 9001", "AS9100"],
    "capabilities": "Precision investment casting for complex geometries in aerospace and medical applications.",
    "minOrderQty": 10,
    "maxOrderQty": 5000,
    "rating": 4.8
  },
  {
    "id": 11,
    "name": "Vacuum Cast Technologies",
    "location": "Seattle, WA",
    "phone": "+1-206-555-0852",
    "email": "sales@vacuumcast.com",
    "website": "www.vacuumcast.com",
    "specialties": ["Plastic", "Vacuum Casting", "ABS", "Polycarbonate"],
    "processes": ["Moulding"],
    "materials": ["Plastic", "Rubber"],
    "grades": ["ABS", "Polycarbonate", "Silicone"],
    "subProcesses": ["Vacuum Casting", "Injection Molding"],
    "certifications": ["ISO 9001"],
    "capabilities": "Low-volume vacuum casting for prototypes and short-run production in various plastics.",
    "minOrderQty": 1,
    "maxOrderQty": 1000,
    "rating": 4.7
  },
  {
    "id": 12,
    "name": "Multi-Process Manufacturing",
    "location": "Atlanta, GA",
    "phone": "+1-404-555-0963",
    "email": "contact@multiprocess.com",
    "website": "www.multiprocess.com",
    "specialties": ["Steel", "Aluminum", "CNC Milling", "Blanking"],
    "processes": ["Machining", "Sheet Metal Pressing"],
    "materials": ["Steel", "Aluminum"],
    "grades": ["Stainless Steel", "6061", "Mild Steel"],
    "subProcesses": ["CNC Milling", "Blanking", "Piercing", "CNC Turning"],
    "certifications": ["ISO 9001", "TS 16949"],
    "capabilities": "Full-service manufacturing with machining, stamping, and assembly under one roof.",
    "minOrderQty": 100,
    "maxOrderQty": 100000,
    "rating": 4.8
  }
];

// Application State
const appState = {
  selectedProcess: '',
  selectedMaterial: '',
  selectedGrade: '',
  selectedSubProcess: '',
  filteredSuppliers: [],
  currentSupplier: null
};

// DOM References
const refs = {};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing Kokki app...');
  initializeApp();
});

function initializeApp() {
  // Cache DOM elements
  refs.processSelect = document.getElementById('processSelect');
  refs.materialsSelect = document.getElementById('materialsSelect');
  refs.gradeSelect = document.getElementById('gradeSelect');
  refs.subProcessSelect = document.getElementById('subProcessSelect');
  
  refs.materialsGroup = document.getElementById('materialsGroup');
  refs.gradeGroup = document.getElementById('gradeGroup');
  refs.subProcessGroup = document.getElementById('subProcessGroup');
  
  refs.loadingSection = document.getElementById('loadingSection');
  refs.suppliersSection = document.getElementById('suppliersSection');
  refs.emptyState = document.getElementById('emptyState');
  
  refs.suppliersGrid = document.getElementById('suppliersGrid');
  refs.suppliersCount = document.getElementById('suppliersCount');
  
  refs.resetBtn = document.getElementById('resetBtn');
  refs.supplierModal = document.getElementById('supplierModal');
  refs.modalClose = document.getElementById('modalClose');
  refs.modalBody = document.getElementById('supplierModalBody');

  // Setup event listeners
  setupEventListeners();
  
  console.log('Kokki app initialized successfully');
}

function setupEventListeners() {
  // Dropdown change events
  refs.processSelect.addEventListener('change', handleProcessChange);
  refs.materialsSelect.addEventListener('change', handleMaterialChange);
  refs.gradeSelect.addEventListener('change', handleGradeChange);
  refs.subProcessSelect.addEventListener('change', handleSubProcessChange);
  
  // Reset button
  refs.resetBtn.addEventListener('click', resetSelections);
  
  // Modal events
  refs.modalClose.addEventListener('click', closeModal);
  refs.supplierModal.addEventListener('click', function(e) {
    if (e.target === refs.supplierModal) {
      closeModal();
    }
  });
  
  // Escape key to close modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && refs.supplierModal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Dropdown Handlers
function handleProcessChange() {
  const selectedProcess = refs.processSelect.value;
  console.log('Process selected:', selectedProcess);
  
  appState.selectedProcess = selectedProcess;
  appState.selectedMaterial = '';
  appState.selectedGrade = '';
  appState.selectedSubProcess = '';
  
  // Clear and hide subsequent dropdowns
  buildDropdown(refs.materialsSelect, 'materials');
  buildDropdown(refs.gradeSelect, 'grade');
  buildDropdown(refs.subProcessSelect, 'sub process');
  
  hideGroup(refs.gradeGroup);
  hideGroup(refs.subProcessGroup);
  hideSupplierResults();
  
  if (selectedProcess) {
    // Populate materials dropdown
    const materials = Object.keys(hierarchyData[selectedProcess] || {});
    console.log('Available materials for', selectedProcess, ':', materials);
    buildDropdown(refs.materialsSelect, 'materials', materials);
    showGroup(refs.materialsGroup);
  } else {
    hideGroup(refs.materialsGroup);
  }
}

function handleMaterialChange() {
  const selectedMaterial = refs.materialsSelect.value;
  console.log('Material selected:', selectedMaterial);
  
  appState.selectedMaterial = selectedMaterial;
  appState.selectedGrade = '';
  appState.selectedSubProcess = '';
  
  // Clear and hide subsequent dropdowns
  buildDropdown(refs.gradeSelect, 'grade');
  buildDropdown(refs.subProcessSelect, 'sub process');
  
  hideGroup(refs.subProcessGroup);
  hideSupplierResults();
  
  if (selectedMaterial) {
    // Populate grade dropdown
    const grades = Object.keys(hierarchyData[appState.selectedProcess]?.[selectedMaterial] || {});
    console.log('Available grades for', selectedMaterial, ':', grades);
    buildDropdown(refs.gradeSelect, 'grade', grades);
    showGroup(refs.gradeGroup);
  } else {
    hideGroup(refs.gradeGroup);
  }
}

function handleGradeChange() {
  const selectedGrade = refs.gradeSelect.value;
  console.log('Grade selected:', selectedGrade);
  
  appState.selectedGrade = selectedGrade;
  appState.selectedSubProcess = '';
  
  // Clear sub process dropdown
  buildDropdown(refs.subProcessSelect, 'sub process');
  
  hideSupplierResults();
  
  if (selectedGrade) {
    // Populate sub process dropdown
    const subProcesses = hierarchyData[appState.selectedProcess]?.[appState.selectedMaterial]?.[selectedGrade] || [];
    console.log('Available sub processes for', selectedGrade, ':', subProcesses);
    buildDropdown(refs.subProcessSelect, 'sub process', subProcesses);
    showGroup(refs.subProcessGroup);
  } else {
    hideGroup(refs.subProcessGroup);
  }
}

function handleSubProcessChange() {
  const selectedSubProcess = refs.subProcessSelect.value;
  console.log('Sub Process selected:', selectedSubProcess);
  
  appState.selectedSubProcess = selectedSubProcess;
  
  if (selectedSubProcess) {
    // Filter and display suppliers
    filterAndDisplaySuppliers();
  } else {
    hideSupplierResults();
  }
}

// Utility Functions
function buildDropdown(selectElement, placeholder, options = []) {
  selectElement.innerHTML = `<option value="">Select ${placeholder}...</option>`;
  
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
}

function showGroup(group) {
  group.style.display = 'block';
}

function hideGroup(group) {
  group.style.display = 'none';
}

function filterAndDisplaySuppliers() {
  console.log('Filtering suppliers with selections:', appState);
  
  // Show loading
  showLoading();
  
  // Simulate loading delay
  setTimeout(() => {
    // Filter suppliers based on selections
    const filteredSuppliers = suppliersData.filter(supplier => {
      const matchesProcess = supplier.processes.includes(appState.selectedProcess);
      const matchesMaterial = supplier.materials.includes(appState.selectedMaterial);
      const matchesGrade = supplier.grades.includes(appState.selectedGrade);
      const matchesSubProcess = supplier.subProcesses.includes(appState.selectedSubProcess);
      
      return matchesProcess && matchesMaterial && matchesGrade && matchesSubProcess;
    });
    
    appState.filteredSuppliers = filteredSuppliers;
    console.log('Filtered suppliers:', filteredSuppliers.length);
    
    hideLoading();
    
    if (filteredSuppliers.length > 0) {
      displaySuppliers(filteredSuppliers);
    } else {
      showEmptyState();
    }
  }, 800);
}

function showLoading() {
  refs.loadingSection.style.display = 'block';
  refs.suppliersSection.style.display = 'none';
  refs.emptyState.style.display = 'none';
}

function hideLoading() {
  refs.loadingSection.style.display = 'none';
}

function hideSupplierResults() {
  refs.suppliersSection.style.display = 'none';
  refs.emptyState.style.display = 'none';
}

function displaySuppliers(suppliers) {
  console.log('Displaying', suppliers.length, 'suppliers');
  
  refs.suppliersCount.textContent = `${suppliers.length} supplier${suppliers.length !== 1 ? 's' : ''} found`;
  refs.suppliersGrid.innerHTML = suppliers.map(supplier => createSupplierCard(supplier)).join('');
  
  refs.suppliersSection.style.display = 'block';
  refs.emptyState.style.display = 'none';
}

function showEmptyState() {
  console.log('Showing empty state');
  refs.suppliersSection.style.display = 'none';
  refs.emptyState.style.display = 'block';
}

function createSupplierCard(supplier) {
  return `
    <div class="supplier-card fade-in" onclick="openSupplierModal(${supplier.id})">
      <div class="supplier-card__header">
        <h3 class="supplier-card__name">${supplier.name}</h3>
        <div class="supplier-card__rating">
          <span class="star-rating">★</span>
          <span>${supplier.rating}</span>
        </div>
      </div>
      
      <div class="supplier-card__location">${supplier.location}</div>
      
      <div class="supplier-card__capabilities">${supplier.capabilities}</div>
      
      <div class="supplier-card__tags">
        ${supplier.certifications.map(cert => `<span class="tag tag--certification">${cert}</span>`).join('')}
        ${supplier.specialties.slice(0, 3).map(specialty => `<span class="tag tag--specialty">${specialty}</span>`).join('')}
      </div>
      
      <div class="supplier-card__footer">
        <div class="supplier-card__order-qty">
          Min: ${supplier.minOrderQty.toLocaleString()} | Max: ${supplier.maxOrderQty.toLocaleString()}
        </div>
        <div class="supplier-card__contact">
          <a href="tel:${supplier.phone}" class="contact-link" onclick="event.stopPropagation()">Call</a>
          <a href="mailto:${supplier.email}" class="contact-link" onclick="event.stopPropagation()">Email</a>
        </div>
      </div>
    </div>
  `;
}

function openSupplierModal(supplierId) {
  console.log('Opening supplier modal for ID:', supplierId);
  
  const supplier = suppliersData.find(s => s.id === supplierId);
  if (!supplier) {
    console.error('Supplier not found:', supplierId);
    return;
  }
  
  appState.currentSupplier = supplier;
  
  refs.modalBody.innerHTML = createSupplierModalContent(supplier);
  refs.supplierModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function createSupplierModalContent(supplier) {
  return `
    <div class="supplier-details">
      <div class="supplier-detail-section">
        <h4>Contact Information</h4>
        <div class="contact-info">
          <div class="contact-item">
            <strong>Phone:</strong> <a href="tel:${supplier.phone}">${supplier.phone}</a>
          </div>
          <div class="contact-item">
            <strong>Email:</strong> <a href="mailto:${supplier.email}">${supplier.email}</a>
          </div>
          <div class="contact-item">
            <strong>Website:</strong> <a href="https://${supplier.website}" target="_blank">${supplier.website}</a>
          </div>
          <div class="contact-item">
            <strong>Location:</strong> ${supplier.location}
          </div>
        </div>
      </div>
      
      <div class="supplier-detail-section">
        <h4>Capabilities</h4>
        <p class="capabilities-text">${supplier.capabilities}</p>
      </div>
      
      <div class="supplier-detail-section">
        <h4>Specialties</h4>
        <div class="specialties-list">
          ${supplier.specialties.map(specialty => `<span class="tag tag--specialty">${specialty}</span>`).join('')}
        </div>
      </div>
      
      <div class="supplier-detail-section">
        <h4>Certifications</h4>
        <div class="certifications-list">
          ${supplier.certifications.map(cert => `<span class="tag tag--certification">${cert}</span>`).join('')}
        </div>
      </div>
      
      <div class="supplier-detail-section">
        <h4>Production Capacity</h4>
        <div class="production-info">
          <div class="production-item">
            <div class="production-value">${supplier.minOrderQty.toLocaleString()}</div>
            <div class="production-label">Minimum Order Quantity</div>
          </div>
          <div class="production-item">
            <div class="production-value">${supplier.maxOrderQty.toLocaleString()}</div>
            <div class="production-label">Maximum Order Quantity</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function closeModal() {
  console.log('Closing supplier modal');
  refs.supplierModal.classList.remove('active');
  document.body.style.overflow = 'auto';
  appState.currentSupplier = null;
}

function resetSelections() {
  console.log('Resetting all selections');
  
  // Reset state
  appState.selectedProcess = '';
  appState.selectedMaterial = '';
  appState.selectedGrade = '';
  appState.selectedSubProcess = '';
  appState.filteredSuppliers = [];
  
  // Reset dropdowns
  refs.processSelect.value = '';
  buildDropdown(refs.materialsSelect, 'materials');
  buildDropdown(refs.gradeSelect, 'grade');
  buildDropdown(refs.subProcessSelect, 'sub process');
  
  // Hide all groups except process
  hideGroup(refs.materialsGroup);
  hideGroup(refs.gradeGroup);
  hideGroup(refs.subProcessGroup);
  
  // Hide suppliers section
  hideSupplierResults();
  
  console.log('Selections reset successfully');
}

// Global function for onclick handlers
window.openSupplierModal = openSupplierModal;