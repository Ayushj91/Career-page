import React from "react";
import { ChevronDown, Filter, LayoutGrid, Plus } from "lucide-react";
import { CardFour } from "./Card";
import Data from "../utils/Data";
import { useState, useEffect } from "react";
import { Minus } from "lucide-react";

export function FilterTwo() {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [isJobTypeOpen, setIsJobTypeOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isExperienceLevelOpen, setIsExperienceLevelOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [selectedExperienceLevel, setSelectedExperienceLevel] = useState([]);

  const toggleJobType = () => {
    setIsJobTypeOpen(!isJobTypeOpen);
  };
  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
  };
  const toggleExperienceLevel = () => {
    setIsExperienceLevelOpen(!isExperienceLevelOpen);
  };

  const toggleDepartment = () => {
    setIsDepartmentOpen(!isDepartmentOpen);
  };

  const toggleSort = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleJobType = (e) => {
    setSelectedJobType((prevSelectedJobType) => {
      if (e.target.checked) {
        return [...prevSelectedJobType, e.target.value];
      } else {
        return prevSelectedJobType.filter((item) => item !== e.target.value);
      }
    });
  };
  const handleDepartment = (e) => {
    setSelectedDepartment((prevSelectedDepartment) => {
      if (e.target.checked) {
        return [...prevSelectedDepartment, e.target.value];
      } else {
        return prevSelectedDepartment.filter((item) => item !== e.target.value);
      }
    });
  };

  const handleLocation = (e) => {
    setSelectedLocation((prevSelectedLocation) => {
      if (e.target.checked) {
        return [...prevSelectedLocation, e.target.value];
      } else {
        return prevSelectedLocation.filter((item) => item !== e.target.value);
      }
    });
  };

  const handleExperienceLevel = (e) => {
    setSelectedExperienceLevel((prevSelectedExperienceLevel) => {
      if (e.target.checked) {
        return [...prevSelectedExperienceLevel, e.target.value];
      } else {
        return prevSelectedExperienceLevel.filter(
          (item) => item !== e.target.value
        );
      }
    });
  };

  useEffect(() => {
    console.log(selectedJobType);
    console.log(selectedDepartment);
    console.log(selectedLocation);
    console.log(selectedExperienceLevel);
  }, [
    selectedJobType,
    selectedDepartment,
    selectedLocation,
    selectedExperienceLevel,
  ]);

  return (
    <section className="w-full h-full flex flex-col p-4">
      {/* Top */}
      <div className="md:flex md:flex-row md:items-start md:justify-between">
        <h1 className=" font-bold text-5xl">Careers</h1>
        <div className="mt-6 flex items-center pt-2 md:mt-0 md:space-x-4 md:pt-0">
          {isSortOpen && (
            <div className="relative group">
              <div className="absolute right-0 top-8 z-10 w-64 mt-2 origin-top-right rounded-md shadow-lg">
                <div className="rounded-md bg-white shadow-xs">
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                  >
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Newest
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Oldest
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover-bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                    >
                      Most Popular
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <hr className="my-8" />
      <div className="lg:flex lg:gap-x-6 flex-grow ">
        <div className="lg:w-1/4 space-y-6 divide-y lg:col-span-3 lg:block">
          <div className="flex items-center justify-between pt-4">
            <h6
              onClick={toggleJobType}
              className="font-semibold text-2xl cursor-pointer"
            >
              Job Type
            </h6>
            <span className="block cursor-pointer ">
              {isJobTypeOpen ? (
                <Minus onClick={toggleJobType} className="h-6 w-6" />
              ) : (
                <Plus onClick={toggleJobType} className="h-6 w-6" />
              )}
            </span>
          </div>
          {isJobTypeOpen &&
            Data.JobTypes.map((item, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    className="mr-2 ml-6"
                    onChange={handleJobType}
                    value={item}
                  />
                  {item}
                </label>
              </div>
            ))}

          <div className="flex items-center justify-between pt-4">
            <h6
              onClick={toggleDepartment}
              className="font-semibold text-2xl cursor-pointer"
            >
              Department
            </h6>
            <span className="block cursor-pointer">
              {isDepartmentOpen ? (
                <Minus onClick={toggleDepartment} className="h-6 w-6" />
              ) : (
                <Plus onClick={toggleDepartment} className="h-6 w-6" />
              )}
            </span>
          </div>
          {isDepartmentOpen &&
            Data.Department.map((item, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    className="mr-2 ml-6"
                    value={item}
                    onChange={handleDepartment}
                  />
                  {item}
                </label>
              </div>
            ))}

          <div className="flex items-center justify-between pt-4">
            <h6
              onClick={toggleLocation}
              className="font-semibold text-2xl cursor-pointer"
            >
              Location
            </h6>
            <span className="block cursor-pointer ">
              {isLocationOpen ? (
                <Minus onClick={toggleLocation} className="h-6 w-6" />
              ) : (
                <Plus onClick={toggleLocation} className="h-6 w-6" />
              )}
            </span>
          </div>
          {isLocationOpen &&
            Data.Location.map((item, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    className="mr-2 ml-6"
                    value={item}
                    onChange={handleLocation}
                  />
                  {item}
                </label>
              </div>
            ))}
          <div className="flex items-center justify-between pt-4">
            <h6
              onClick={toggleExperienceLevel}
              className="font-semibold text-2xl cursor-pointer"
            >
              Experience Level
            </h6>
            <span className="block cursor-pointer ">
              {isExperienceLevelOpen ? (
                <Minus onClick={toggleExperienceLevel} className="h-6 w-6" />
              ) : (
                <Plus onClick={toggleExperienceLevel} className="h-6 w-6" />
              )}
            </span>
          </div>
          {isExperienceLevelOpen &&
            Data.ExperienceLevel.map((item, index) => (
              <div key={index}>
                <label>
                  <input
                    type="checkbox"
                    className="mr-2 ml-6"
                    onChange={handleExperienceLevel}
                    value={item}
                  />
                  {item}
                </label>
              </div>
            ))}
        </div>
        <div>
          <CardFour
            isDepartment={isDepartmentOpen}
            isLocation={isLocationOpen}
            isExperienceLevel={isExperienceLevelOpen}
            isJobType={isJobTypeOpen}
            department={selectedDepartment}
            jobType={selectedJobType}
            location={selectedLocation}
            experienceLevel={selectedExperienceLevel}
          />
        </div>
      </div>
    </section>
  );
}
