import React, { useEffect, useMemo, useState } from 'react';
import axiosInstance from '../../../../../../helpers/axiosInstance';
import SelectColumnFilter from '../../../../../../helpers/TableFilter';
import DocsTable from '../../../../../Components/docsTable';
import ShowDoc from './ShowDoc';

const DocumentApproval = () => {
  const [docsList, setDocsList] = useState([]);
  const [showDoc, setShowDoc] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('jwt'));
    axiosInstance
      .get(`/docs2/getAllDocs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDocsList(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState([]);

  docsList.forEach((element) => {
    for (const key in element) {
      if (element[key] === null) {
        element[key] = '';
      }
    }
  });

  const headCells = [
    {
      id: 'Student ID',
      accessor: '_id',
      Header: 'Student ID',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Student Name',
      accessor: 'username',
      Header: 'Student Name',
    },
    {
      accessor: 'name',
      Header: 'Document Name',
    },
    {
      id: 'CreatedAt',
      accessor: 'createdAt',
      Header: 'Registration',
    },
    {
      id: 'IsApproved',
      accessor: 'isApproved',
      Header: 'IsApproved',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
    {
      id: 'Name',
      accessor: 'name',
      Header: 'Name',
      Filter: SelectColumnFilter,
      filter: 'includes',
    },
  ];
  const columns = useMemo(() => headCells, []);

  return (
    <div className="relative mt-4">
      <ShowDoc show={showDoc} setShow={setShowDoc} data={selectedDoc} />
      <button
        onClick={() => {
          setShow(!show);
        }}
        className="right-0 -top-5 absolute w-max px-4 py-2 bg-red-1 text-white font-bold rounded-2xl m-3 hover:text-red-1 hover:bg-white border-2 border-red-1"
      >
        Filter
      </button>
      <DocsTable
        data={docsList}
        columns={columns}
        show={show}
        setShow={setShow}
        justList={true}
        setSelected={setSelected}
        func={(data) => {
          setShowDoc(true);
          setSelectedDoc(data);
        }}
      />
    </div>
  );
};

export default DocumentApproval;
