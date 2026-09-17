import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPIs:
    """Nusantara Travel API tests"""

    def test_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200

    def test_get_cars_count(self):
        r = requests.get(f"{BASE_URL}/api/cars")
        assert r.status_code == 200
        data = r.json()
        assert len(data) == 6

    def test_get_cars_fields(self):
        r = requests.get(f"{BASE_URL}/api/cars")
        car = r.json()[0]
        assert "name" in car
        assert "price_per_day" in car
        assert "seats" in car
        assert "transmission" in car
        assert "fuel" in car

    def test_get_tours_count(self):
        r = requests.get(f"{BASE_URL}/api/tours")
        assert r.status_code == 200
        data = r.json()
        assert len(data) == 6

    def test_get_tours_fields(self):
        r = requests.get(f"{BASE_URL}/api/tours")
        tour = r.json()[0]
        assert "name" in tour
        assert "duration" in tour
        assert "price" in tour
        assert "destinations" in tour

    def test_get_testimonials_count(self):
        r = requests.get(f"{BASE_URL}/api/testimonials")
        assert r.status_code == 200
        data = r.json()
        assert len(data) == 5

    def test_get_gallery_count(self):
        r = requests.get(f"{BASE_URL}/api/gallery")
        assert r.status_code == 200
        data = r.json()
        assert len(data) == 8

    def test_post_contact(self):
        payload = {"name": "TEST_User", "email": "test@example.com", "phone": "08123456789", "message": "Test message"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_User"
        assert "id" in data
