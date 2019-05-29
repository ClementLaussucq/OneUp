class Experience < ApplicationRecord
  belongs_to :user
  has_many :bookings, dependent: :destroy
  validates :description, :name, :price, :category, :address, presence: true, allow_blank: false
  geocoded_by :address
  after_validation :geocode, if: :will_save_change_to_address?
  CATEGORIES = [
    "Acheteur",
    "Administrateur de base de données",
    "Agent de sûreté aéroportuaire",

    "Agent immobilier",
    "Agent de police",
    "Agent de presse",

    "Agronome",
    "Ambulancier",
    "Analyste financier",

    "Analyste Web",
    "Architecte",

    "Avocat",
    "Charpentier",
    "Chauffeur de taxi",
    "Chefs de chantier",

    "Chirurgien orthopédiste",
    "Coiffeur",
    "Commis de cuisine",
    "Comptable",

    "Conseiller en insertion professionnelle",
    "Consultant bien-être",
    "Consultant en informatique",

    "Cuisinier",
    "Décorateur d'intérieur",
    "Dentiste",

    "Directeur artistique",
    "Directeur des ventes",
    "Directeur financier",
    "Directeur RH",
    "Economiste",
    "Educateur de jeunes",
    "Eleveur",
    "Employé de banque",

    "Huissier",

    "Journaliste",
    "Juge",
    "Kinésithérapeute",

    "Machiniste",
    "Magasinier",
    "Maître d'hôtel",

    "Masseur",
    "Mécanicien aéronautique",
    "Médecin",
    "Moniteur d'auto-école",

    "Opticien",

    "Pharmacien",
    "Photographe",

    "Pilote",
    "Politicien",
    "Pompier",

    "Prêtre",
    "Procureur",
    "Professeur des écoles",

    "Psychologue",

    "Réceptionniste d'hôtel",
    "Responsable communication",
    "Responsable grands comptes",
    "Sages-femmes",
    "Serveur",
    "Skipper",
    "Soldat",
    "Travailleur social",
    "Urbaniste",
    "Vendeur",
    "Vétérinaire",
    "Webmaster"
  ]

  CITIES_ADDRESS = [
    "Paris",
    "Lyon",
    "Marseille – Aix-en-Provence",
    "Toulouse",
    "Bordeaux",
    "Lille",
    "Nice",
    "Nantes",
    "Strasbourg",
    "Rennes",
    "Pau"
  ]

  def users_info_booking
    result_array = []
    bookings.each do |booking|
      user_name = "#{booking.user.first_name.capitalize} #{booking.user.last_name.capitalize}"
      user_email = booking.user.email
      user_booking = booking.id
      hash_user = {}
      hash_user[:name] = user_name
      hash_user[:email] = user_email
      hash_user[:booking_id] = user_booking
      result_array << hash_user
    end
    return result_array
  end

  def unavailable_dates
    bookings.pluck(:date)
  end

  def pending_bookings
    bookings.where(status: "Pending").pluck(:date)
  end

  def confirmed_bookings
    bookings.where(status: "Confirmed").pluck(:date)
  end
end
