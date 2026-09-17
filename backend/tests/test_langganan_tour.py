import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', '').rstrip('/')

class TestAPIs:
    """Langganan Tour API tests"""

    def test_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "Langganan" in r.json().get("message", "")

    def test_get_tours(self):
        r = requests.get(f"{BASE_URL}/api/tours")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 7
        # Check Banyuwangi content
        names = [t["name"] for t in data]
        assert any("Banyuwangi" in n for n in names)

    def test_tours_fields(self):
        r = requests.get(f"{BASE_URL}/api/tours")
        data = r.json()
        for tour in data:
            assert "name" in tour
            assert "price" in tour
            assert "duration" in tour
            assert "category" in tour

    def test_get_testimonials(self):
        r = requests.get(f"{BASE_URL}/api/testimonials")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 5

    def test_get_gallery(self):
        r = requests.get(f"{BASE_URL}/api/gallery")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        assert len(data) >= 8

    def test_post_contact(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={
            "name": "TEST_User",
            "email": "test@example.com",
            "phone": "081234567890",
            "message": "Test message"
        })
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == "TEST_User"
        assert "id" in data

    def test_contact_missing_fields(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={"name": "Test"})
        assert r.status_code == 422
