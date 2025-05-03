const horariosDisponiveis = [
    "08:00", "09:00", "10:00", "11:00",
    "13:00", "14:00", "15:00", "16:00"
  ];
  
  const dataInput = document.getElementById("data");
  const horarioSelect = document.getElementById("horario");
  const form = document.getElementById("agendamento-form");
  const resumoDiv = document.getElementById("resumo");
  
  dataInput.addEventListener("change", () => {
    horarioSelect.innerHTML = ""; // limpa opções
    const dataSelecionada = dataInput.value;
    
    if (dataSelecionada) {
      horariosDisponiveis.forEach(horario => {
        const option = document.createElement("option");
        option.value = horario;
        option.textContent = horario;
        horarioSelect.appendChild(option);
      });
    } else {
      const option = document.createElement("option");
      option.textContent = "Selecione a data primeiro";
      horarioSelect.appendChild(option);
    }
  });
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = dataInput.value;
    const horario = horarioSelect.value;
  
    if (!nome || !telefone || !email || !data || !horario) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    const resumo = `
      <h3>Agendamento Confirmado!</h3>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Telefone:</strong> ${telefone}</p>
      <p><strong>E-mail:</strong> ${email}</p>
      <p><strong>Data:</strong> ${data}</p>
      <p><strong>Horário:</strong> ${horario}</p>
    `;
  
    resumoDiv.innerHTML = resumo;
    form.reset();
    horarioSelect.innerHTML = "<option>Selecione a data primeiro</option>";
  });
  