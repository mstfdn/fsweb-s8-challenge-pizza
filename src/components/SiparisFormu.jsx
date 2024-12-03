import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Axios'u içe aktarın

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

const Title = styled.h2`
  color: #d32f2f;
`;

const Label = styled.label`
  display: block;
  margin: 10px 0 5px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  margin-right: 10px;
`;

const Button = styled.button`
  background-color: #fbc02d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #f9a825;
  }
`;

function SiparisFormu() {
  const [size, setSize] = useState('');
  const [dough, setDough] = useState('');
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Ekstra malzemeleri işleme
  const handleExtrasChange = (e) => {
    const { value, checked } = e.target;
    setExtras((prev) =>
      checked ? [...prev, value] : prev.filter((item) => item !== value)
    );
  };

  // Formu gönderme işlemi
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Gerekli alanları kontrol et
    if (!size || !dough) {
      alert('Lütfen pizza boyutunu ve hamur türünü seçin!');
      return;
    }

    // Sipariş verilerini hazırlama
    const order = {
      size,
      dough,
      extras,
      note,
      quantity,
    };

    try {
      // API isteği gönderme
      const response = await axios.post('https://reqres.in/api/pizza', order);
      console.log(response.data); // Başarılı yanıtı konsola yazdır
      alert('Siparişiniz başarıyla alındı!');
    } catch (error) {
      console.error('Sipariş gönderiminde hata:', error);
      alert('Sipariş gönderirken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <FormContainer>
      <Title>Sipariş Formu</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="size">Pizza Boyutu:</Label>
          <Select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            required
          >
            <option value="">Boyut Seçin</option>
            <option value="small">Küçük</option>
            <option value="medium">Orta</option>
            <option value="large">Büyük</option>
          </Select>
        </div>

        <div>
          <Label htmlFor="dough">Hamur Türü:</Label>
          <Select
            id="dough"
            value={dough}
            onChange={(e) => setDough(e.target.value)}
            required
          >
            <option value="">Hamur Türü Seçin</option>
            <option value="thin">İnce</option>
            <option value="thick">Kalın</option>
          </Select>
        </div>

        <div>
          <Label>Ekstra Malzemeler:</Label>
          <CheckboxContainer>
            <CheckboxLabel>
              <Input
                type="checkbox"
                value="cheese"
                onChange={handleExtrasChange}
              />
              Peynir
            </CheckboxLabel>
            <CheckboxLabel>
              <Input
                type="checkbox"
                value="mushrooms"
                onChange={handleExtrasChange}
              />
              Mantar
            </CheckboxLabel>
            <CheckboxLabel>
              <Input
                type="checkbox"
                value="olives"
                onChange={handleExtrasChange}
              />
              Zeytin
            </CheckboxLabel>
          </CheckboxContainer>
        </div>

        <div>
          <Label htmlFor="note">Not:</Label>
          <Input
            id="note"
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Eklemek istediğiniz notu buraya yazın"
          />
        </div>

        <div>
          <Label htmlFor="quantity">Adet:</Label>
          <Input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
          />
        </div>

        <Button type="submit">Siparişi Gönder</Button>
      </form>
    </FormContainer>
  );
}

export default SiparisFormu;
