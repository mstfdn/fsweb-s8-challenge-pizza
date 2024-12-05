describe('Sipariş Formu Testleri', () => {
  it('Sipariş Ver butonuna tıklayınca Sipariş Formu sayfasına yönlendirilmelidir', () => {
    // Ana sayfaya gidiyoruz
    cy.visit('http://localhost:5173/'); // Ana sayfaya git

    // "Sipariş Ver" butonuna tıklıyoruz ve sipariş formu sayfasına yönlendirilip yönlendirilmediğini kontrol ediyoruz
    cy.contains('SİPARİŞ VER').first().click(); // İlk "SİPARİŞ VER" butonuna tıklama
    cy.url().should('include', '/siparis'); // Sipariş Formu sayfasına yönlendirilmiş olmalı
  });

  it('İsim inputuna metin girilmeli', () => {
    cy.visit('http://localhost:5173/siparis'); // Sipariş formuna git
    cy.get('input[type="text"]') // İsim inputunu seç
      .should('be.visible') // Görünür olmalı
      .type('Mustafa') // 'Mustafa' ismini gir
      .should('have.value', 'Mustafa'); // Değerin doğru olduğunu kontrol et
  });

  it('Birden fazla malzeme seçilebilmeli', () => {
    cy.visit('http://localhost:5173/siparis'); // Sipariş formuna git
    cy.get('input[type="checkbox"]').first().check(); // İlk checkbox'ı seç
    cy.get('input[type="checkbox"]').eq(2).check(); // Üçüncü checkbox'ı seç
    cy.get('input[type="checkbox"]:checked').should('have.length', 2); // Seçilen checkbox sayısının 2 olduğuna emin ol
  });

  it('Form başarıyla gönderilmeli', () => {
    cy.visit('http://localhost:5173/siparis'); // Sipariş formuna git

    // İsim girme
    cy.get('input[type="text"]')
      .should('be.visible')
      .type('Mustafa'); // İsim gir

    // Hamur seçme
    cy.get('select#dough').select('ince'); // İnce hamur seç

    // Boyut seçme
    cy.get('input[type="radio"][id="orta"]').check(); // Orta boy seç

    // Ekstra malzeme seçme
    cy.get('input[type="checkbox"]').first().check(); // İlk checkbox'ı seç

    // Sipariş notu ekleme
    cy.get('textarea').type('Lütfen extra peynir ekleyin'); // Not ekle

    // Sipariş ver butonuna tıklama
    cy.get('button').contains('SİPARİŞ VER').click();

    // Yönlendirme kontrolü
    cy.url().should('include', '/onay'); // Onay sayfasına yönlendirilmiş olmalı
  });
});
