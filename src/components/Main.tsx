import React, { FC, useState, useEffect } from 'react';

import Header from './Header';
import IconLabelTabs from './Tabs/IconLabelsPanel';

import { Task } from '../types/Task';
import { AllTasks } from '../tasks/tasks';


type FilteredDataType = {
  [key: string]: string;
}

const Main: FC = (): JSX.Element => {
  const [tasks, setTasks] = useState<Object>({});
  const [foundedTask, setFoundedTask] = useState<Object>({});

  useEffect(() => {
    setTasks(AllTasks);
    setFoundedTask(AllTasks);
  }, []);

  const search = (searchText: string): void => {
    
    const filteredData: FilteredDataType = {};

    for (const key in tasks) {
      // @ts-ignore
      filteredData[key] = tasks[key]
        .filter((task: Task): boolean => 
          task.title.toLowerCase()
          .indexOf(searchText) > -1
        );
    }
    setFoundedTask(filteredData);
  };

  return (
    <>
      <Header search={search} />
      {// @ts-ignore
      <IconLabelTabs data={foundedTask} />}
    </>
  );
};

export default Main;