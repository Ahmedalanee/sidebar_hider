from setuptools import setup, find_packages

setup(
    name="sidebar_hider",
    version="0.0.1",  # Must match __init__.py
    description="An ERPNext app to auto-hide the sidebar.",
    author="Your Name",
    author_email="your_email@example.com",
    packages=find_packages(),
    zip_safe=False,
    include_package_data=True,
    install_requires=[]
)
